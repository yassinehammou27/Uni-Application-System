const express = require("express");
const router = express.Router();
const passport = require("passport");
const pool = require("../config/database.js");

router.get("/", (req, res) => {
  res.redirect("/login");
});

// -----------------------------------
// LOGIN START
// -----------------------------------
router.get("/login", (req, res) => {
  if (req.isAuthenticated()) {
    req.flash("message", "Sie sind bereits eingeloggt.");
    res.redirect("/profile");
  } else {
    res.render("login", {
      title: "Login",
      user: req.user,
      message: res.locals.message,
    });
  }
});
router.post(
  "/login",
  (req, res, next) => {
    if (req.isAuthenticated()) {
      req.flash("message", "Sie sind bereits eingeloggt.");
      res.redirect("/profile");
    } else {
      const user = req.body.email.toLowerCase();
      const pass = req.body.password;
      if (user.length === 0 || pass.length === 0) {
        req.flash("message", "Bitte geben Sie Email und Passwort an.");
        res.redirect("/login");
      } else {
        next();
      }
    }
  },
  passport.authenticate("login", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

// -----------------------------------
// REGISTER START
// -----------------------------------
router.get("/register", (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect("/profile");
  } else {
    res.render("register", {
      title: "Registrierung",
      user: req.user,
      message: res.locals.message,
    });
  }
});
router.post(
  "/register",
  (req, res, next) => {
    if (req.isAuthenticated()) {
      req.flash("message", "Sie sind bereits eingeloggt.");
      res.redirect("/profile");
    } else {
      const email = req.body.email.toLowerCase();
      const pass = req.body.password;
      const passConf = req.body.passConf;
      if (email.length === 0 || pass.length === 0 || passConf.length === 0) {
        req.flash(
          "message",
          "Bitte geben Sie eine Email, sowie ein Passwort und Bestätigung ein."
        );
        res.redirect("/login");
      } else if (pass != passConf) {
        req.flash(
          "message",
          "Die eingegebenen Passwörter stimmen nicht überein."
        );
        res.redirect("/register");
      } else {
        next();
      }
    }
  },
  passport.authenticate("register", {
    successRedirect: "/application",
    failureRedirect: "/register",
    failureFlash: true,
  })
);

// -----------------------------------
// LOGOUT START
// -----------------------------------
router.get("/logout", (req, res) => {
  if (req.isAuthenticated()) {
    console.log("User [" + req.user.email + "] has logged out.");
    req.logout();
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});

// -----------------------------------
// PROFILE START
// -----------------------------------
router.get("/profile", async (req, res) => {
  if (req.isAuthenticated()) {
    const userID = req.user.id;
    const email = req.user.email;
    try {
      const client = await pool.connect();
      await client.query("BEGIN");
      const result = await client.query("SELECT * FROM users WHERE id=$1", [
        userID,
      ]);
      const resapp = await client.query(
        "SELECT * FROM applications WHERE user_id=$1",
        [userID]
      );
      const resref = await client.query("SELECT * FROM refs WHERE email = $1", [
        email
      ]);
      await client.query("COMMIT");
      res.render("profile", {
        title: "Profil",
        user: result.rows[0],
        message: res.locals.message,
        application: resapp,
        recommendation: resref,
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    res.redirect("/login");
  }
});

// -----------------------------------
// BEWERBUNG START
// -----------------------------------

router.get("/application", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("application", {
      title: "Application",
      user: req.user,
      message: res.locals.message,
    });
  } else {
    res.redirect("/login");
  }
});

router.post("/application", async (req, res) => {
  if (req.isAuthenticated()) {
    const {
      firstName,
      lastName,
      street,
      city,
      zipCode,
      schoolGradeAvg,
      dateOfBirth,
      phoneNumber,
      motivationLetter,
      streetNumber,
    } = req.body;
    const userID = req.user.id;
    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      street.length === 0 ||
      zipCode.length === 0 ||
      city.length === 0 ||
      schoolGradeAvg.length === 0 ||
      dateOfBirth.length === 0 ||
      phoneNumber.length === 0 ||
      motivationLetter.length === 0
    ) {
      req.flash(
        "message",
        "Bitte Füllen Sie alle Felder aus damit Sie ihre Bewerbung abschicken können"
      );
      res.redirect("/application");
    } else {
      const client = await pool.connect();
      try {
        await client.query("BEGIN");
        client.query(
          "UPDATE users SET first_name = $1,last_name = $2, street = $3, city = $4, date_of_birth = $5, school_grade_avg = $6, phone_number = $7, street_number = $8 , zip_code = $9 WHERE id = $10",
          [
            firstName,
            lastName,
            street,
            city,
            dateOfBirth,
            schoolGradeAvg,
            phoneNumber,
            streetNumber,
            zipCode,
            userID,
          ],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              client.query(
                "INSERT INTO applications (user_id, motivation_letter, application_date, application_subject) VALUES ($1, $2, $3, $4)",
                [userID, motivationLetter, new Date(), "Informatik"],
                (err, result) => {
                  if (err) {
                    console.log(err);
                  } else {
                    client.query("COMMIT");
                    console.log(
                      "User [" +
                        firstName +
                        " " +
                        lastName +
                        "] hat seine Bewerbung abgeschickt."
                    );
                  }
                }
              );
            }
          }
        );
      } catch (err) {
        console.log(err);
      } 
    req.flash("message", "Ihre Bewerbung wurde erfolgreich abgeschickt.");
    res.redirect("/profile");
    }
   
  } else {
    req.flash("message", "Sie müssen sich zunächst einloggen");
    res.redirect("/login");
  }
});

// -----------------------------------
// STUDENT OVERVIEW START
// -----------------------------------
router.get("/student/overview", async (req, res) => {
  if (req.isAuthenticated()) {
    if (req.user) {
      const client = await pool.connect();
      await client.query("BEGIN");
      client.query(
        `SELECT first_name, last_name, users.id, email, applications.current_status
        FROM users
        INNER JOIN applications
        ON users.id=applications.user_id
        WHERE users.is_student=1`,
        [],
        (err, result) => {
          if (err) console.error(err);
          if (result.rows) {
            const users = result.rows;
            client.query("COMMIT");
            res.render("student-overview", {
              title: "Studierenden-Übersicht",
              user: req.user,
              users,
            });
          } else {
            req.flash(
              "message",
              "Es wurden keine aktiven Bewerbungen gefunden."
            );
            res.render("student-overview", {
              title: "Studierenden-Übersicht",
              user: req.user,
            });
          }
        }
      );
    } else {
      res.redirect("/profile");
    }
  } else {
    res.redirect("/login");
  }
});

router.get("/student/:id", async (req, res) => {
  if (req.isAuthenticated()) {
    if (req.user) {
      const studentId = req.params.id;
      const client = await pool.connect();
      client.query("BEGIN");
      client.query(
        "SELECT users.id, first_name, last_name, email, current_status, street, street_number, city, school_grade_avg FROM users INNER JOIN applications ON users.id=applications.user_id WHERE users.id=$1",
        [studentId],
        async (err, result) => {
          if (err) console.error(err);
          const student = result.rows[0];

          const applications = await pool.query(
            "SELECT * FROM applications WHERE user_id=$1",
            [studentId]
          );
          const references = await pool.query(
            "SELECT * FROM refs WHERE email = $1",
            [student.email]
          );
          client.query("COMMIT");
          res.render("student", {
            title: "Studierendenprofil",
            user: req.user,
            student,
            application: applications,
            recommendation: references,
          });
        }
      );
    } else {
      res.redirect("/login");
    }
  } else {
    res.redirect("/login");
  }
});

router.get("/accept-student/:id", async (req, res) => {
  if (req.isAuthenticated()) {
    if (req.user && req.user.isStudent === 0) {
      try {
        const client = await pool.connect();
        client.query("BEGIN");
        try {
          await client.query(
            "UPDATE applications SET current_status=1 WHERE user_id=$1",
            [req.params.id]
          );
        } catch (error) {
          console.error(error);
        }
        let result;
        try {
          result = await client.query(
            "SELECT email, first_name, last_name FROM users WHERE id=$1",
            [req.params.id]
          );
        } catch (error) {
          console.error(error);
        }
        const user = result.rows[0];
        if (user) {
          client.query("COMMIT");
          const url =
            "mailto:" +
            user.email +
            "?subject=Sie sind zugelassen!&body=Sehr geehrte/r Frau/Herr " +
            user.first_name +
            " " +
            user.last_name +
            ",%0D%0AHerzlichen Glückwunsch! Sie wurden zugelassen zum Studiengang Informatik an der Universität zu Köln." +
            "%0D%0A %0D%0A Mit freundlichen Grüßen" +
            "%0D%0A Ihr Bewerbungsauschuss";
          res.redirect(url);
        } else {
          res.redirect(`/student/${req.params.id}`);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }else{
  res.redirect("back");
  }
});

router.get("/reject-student/:id", async (req, res) => {
  if (req.isAuthenticated()) {
    if (req.user && req.user.isStudent === 0) {
      try {
        const client = await pool.connect();
        client.query("BEGIN");
        try {
          await client.query(
            "UPDATE applications SET current_status=2 WHERE user_id=$1",
            [req.params.id]
          );
        } catch (error) {
          console.error(error);
        }
        let result;
        try {
          result = await client.query(
            "SELECT email, first_name, last_name FROM users WHERE id=$1",
            [req.params.id]
          );
        } catch (error) {
          console.error(error);
        }
        const user = result.rows[0];
        client.query("COMMIT");
        if (user) {
          const url =
            "mailto:" +
            user.email +
            "?subject=Sie wurden leider abgelehnt!&body=Sehr geehrte/r Frau/Herr " +
            user.first_name +
            " " +
            user.last_name +
            ",%0D%0A Es tut uns leid Ihnen mitteilen zu müssen, dass wir ihre Bewerbung abgelehnt haben.!" +
            "%0D%0A %0D%0A Mit freundlichen Grüßen" +
            "%0D%0A Ihr Bewerbungsauschuss";
          res.redirect(url);
        } else {
          res.redirect(`/student/${req.params.id}`);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }else{
  res.redirect("back");}
});

// -----------------------------------
// UPDATE PASSWORD START
// -----------------------------------
router.post(
  "/updpass",
  (req, res, next) => {
    if (req.isAuthenticated()) {
      const password = req.body.password;
      const newpass = req.body.newpass;
      const newpassconf = req.body.newpassconf;
      if (
        password.length === 0 ||
        newpass.length === 0 ||
        newpassconf.length === 0
      ) {
        req.flash(
          "message",
          "Bitte geben Sie eine Email, sowie ein Passwort und Bestätigung ein."
        );
        res.redirect("/profile");
      } else if (newpass != newpassconf) {
        req.flash(
          "message",
          "Die eingegebenen Passwörter stimmen nicht überein."
        );
        res.redirect("/profile");
      } else {
        next();
      }
    } else {
      res.redirect("/");
    }
  },
  passport.authenticate("updatePassword", {
    successRedirect: "/profile",
    failureRedirect: "/profile",
    failureFlash: true,
  })
);

// -----------------------------------
// REFERRAL START
// -----------------------------------

// router.get("/referral", (req, res) => {
//   res.render("referral", {
//     title: "Empfehlungsschreiben einreichen",
//     user: req.user,
//     message: res.locals.message,
//   });
// });

// router.post("/referral", async (req, res) => {
//   const applicantEmail = req.body.applicantEmail.toLowerCase();
//   const refContent = req.body.refContent;
//   const referrerEmail = req.body.referrerEmail.toLowerCase();

//   if (
//     applicantEmail.length === 0 ||
//     refContent.length === 0 ||
//     referrerEmail.length === 0
//   ) {
//     req.flash("message", "Bitte geben Sie Email und Passwort an.");
//     res.redirect("/referral");
//   } else {
//     const client = await pool.connect();

//     try {
//       await client.query("BEGIN");
//       client.query(
//         "INSERT INTO refs (content, email, referrer_email) VALUES ($1, $2, $3)",
//         [refContent, applicantEmail, referrerEmail],
//         (err, result) => {
//           if (err) {
//             console.log(err);
//           } else {
//             client.query("COMMIT");
//             console.log(
//               "Empfehlungsschreiben von " +
//                 referrerEmail +
//                 " für " +
//                 applicantEmail +
//                 " wurde eingereicht."
//             );
//             req.flash(
//               "message",
//               "Das Empfehlungsschreiben wurde abgesendet. Vielen Dank."
//             );
//             res.redirect("/referral");
//           }
//         }
//       );
//     } catch (err) {
//       console.log(err);
//     }
//   }
// });

module.exports = router;
