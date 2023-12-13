const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const pool = require("./database.js");

const LocalStrategy = require("passport-local").Strategy;

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(
    "login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },
      (req, email, password, done) => {
        loginUser();

        // Durch Hoisting wird die Funktion erst erstellt und dann ausgeführt
        async function loginUser() {
          const client = await pool.connect();
          try {
            await client.query("BEGIN");
            JSON.stringify(
              // Nutzer mit dieser Email aus Datenbank holen
              client.query(
                'SELECT * FROM users WHERE email=$1',
                [email],
                (err, result) => {
                  if (err) {
                    return done(err);
                  }
                  if (result.rows[0] == null) {
                    return done(
                      null,
                      false,
                      req.flash("message", "Falsche Email oder Passwort.")
                    );
                  } else {
                    // Passwort überprüfen
                    bcrypt.compare(
                      password,
                      result.rows[0].password,
                      (err, valid) => {
                        if (err) {
                          console.log("Das eingegebene Passwort ist falsch.");
                          return done(err);
                        }
                        if (valid) {
                          console.log(
                            "User [" + req.body.email + "] has logged in."
                          );
                          return done(null, {
                            //user : result.rows[0]
                            email: result.rows[0].email,
                            street: result.rows[0].street,
                            id: result.rows[0].id,
                            firstName: result.rows[0].first_name,
                            lastName: result.rows[0].last_name,
                            city: result.rows[0].city,
                            streetNumber: result.rows[0].street_number,
                            isStudent: result.rows[0].is_student,
                          });
                        } else {
                          return done(
                            null,
                            false,
                            req.flash("message", "Falsche Email oder Passwort.")
                          );
                        }
                      }
                    );
                  }
                }
              )
            );
          } catch (e) {
            throw e;
          }
        }
      }
    )
  );

  passport.use(
    "register",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },
      (req, email, password, done) => {
        registerUser();
        async function registerUser() {
          const client = await pool.connect();
          try {
            await client.query("BEGIN");
            const passHash = await bcrypt.hash(password, 8);
            JSON.stringify(
              client.query(
                'SELECT * FROM users WHERE email=($1)',
                [email],
                (err, result) => {
                  if (err) {
                    return done(err);
                  }
                  if (!testPass(password)) {
                    return done(
                      null,
                      false,
                      req.flash(
                        "message",
                        "Das Passwort muss Klein- und Großbuchstaben sowie mind. eine Zahl enthalten und zwischen 8 und 16 Zeichen lang sein."
                      )
                    );
                  } else {
                    if (result.rows[0]) {
                      return done(
                        null,
                        false,
                        req.flash(
                          "message",
                          "Sorry, diese E-Mail ist bereits registriert"
                        )
                      );
                    } else {
                      const uId = uuidv4();
                      client.query(
                        'INSERT INTO users (id, email, password) VALUES ($1, $2, $3)',
                        [uId, email, passHash],
                        (err, result) => {
                          if (err) {
                            console.log(err);
                          } else {
                            client.query("COMMIT");

                            console.log("User [" + email + "] has registered.");
                            return done(null, { id: uId, email: email });
                          }
                        }
                      );
                    }
                  }
                }
              )
            );
          } catch (e) {
            throw e;
          }
        }
      }
    )
  );

  passport.use(
    "updatePassword",
    new LocalStrategy(
      {
        usernameField: "password",
        passwordField: "newpass",
        passReqToCallback: true,
      },
      (req, password, newpass, done) => {
        updatePassword();
        async function updatePassword() {
          const client = await pool.connect();
          try {
            await client.query("BEGIN");
            const newPassHash = await bcrypt.hash(req.body.newpass, 8);
            JSON.stringify(
              client.query(
                'SELECT id, email, password FROM users WHERE email=$1',
                [req.user.email.toLowerCase()],
                (err, result) => {
                  if (err) {
                    return done(err);
                  }

                  if (!testPass(req.body.password)) {
                    return done(
                      null,
                      false,
                      req.flash(
                        "message",
                        "Das Passwort muss Klein- und Großbuchstaben sowie mind. eine Zahl enthalten und zwischen 8 und 16 Zeichen lang sein."
                      )
                    );
                  } else if (!testPass(req.body.newpass)) {
                    return done(
                      null,
                      false,
                      req.flash(
                        "message",
                        "Das Passwort muss Klein- und Großbuchstaben sowie mind. eine Zahl enthalten und zwischen 8 und 16 Zeichen lang sein."
                      )
                    );
                  } else {
                    if (result.rows[0] == null) {
                      return done(
                        null,
                        false,
                        req.flash(
                          "message",
                          "Fehler beim Ändern des Passworts, versuchen Sie es erneut."
                        )
                      );
                    } else {
                      bcrypt.compare(
                        req.body.password,
                        result.rows[0].password,
                        (err, valid) => {
                          if (err) {
                            console.log(
                              "Eingegebenes aktuelles Passwort ist falsch."
                            );
                            return done(err);
                          }
                          if (valid) {
                            client.query(
                              "UPDATE users SET password=($1) WHERE email=($2)",
                              [newPassHash, req.user.email],
                              (err, result) => {
                                if (err) {
                                  console.log(err);
                                } else {
                                  client.query("COMMIT");
                                  console.log(
                                    "User [" +
                                      req.user.email +
                                      "] has updated their password."
                                  );
                                  return done(
                                    null,
                                    { email: req.user.email,
                                      id: req.user.id},
                                    req.flash(
                                      "message",
                                      "Ihr Passwort wurde geändert"
                                    )
                                  );
                                }
                              }
                            );
                          } else {
                            req.flash(
                              "message",
                              "Eingegebenes aktuelles Passwort ist falsch."
                            );
                            return done(null, false);
                          }
                        }
                      );
                    }
                  }
                }
              )
            );
          } catch (e) {
            throw e;
          }
        }
      }
    )
  );
};

const testPass = (input) => {
  // Mindestens 1 Kleinbuchstabe
  // Mindestens 1 Großbuchstabe
  // Mindestens eine Zahl
  // Länge zwischen 8 und 128 Zeichen
  const format = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,128}$/;
  return format.test(input);
};
