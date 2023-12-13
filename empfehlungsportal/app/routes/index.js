const express = require("express");
const router = express.Router();
const passport = require("passport");
const pool = require("../config/database.js");


router.get("/", (req,res)=> {
  res.json({
    microservice: "Empfehlungsportal"
  })
});

router.get("/search/:email", async (req, res) => {
  try{
    console.log("test");
    const client = await pool.connect();
    client.query("BEGIN");
    const result = await client.query("SELECT * FROM refs WHERE email=$1",
    [req.params.email]
    );
    await client.query("COMMIT");
    res.json(result.rows);
  }catch(error){
    console.error(error);
  }
});

router.get("/referral", (req, res) => {
    res.render("referral", {
      title: "Empfehlungsschreiben einreichen",
      user: req.user,
      message: res.locals.message,
    });
  });
  
  router.post("/referral", async (req, res) => {
    const applicantEmail = req.body.applicantEmail.toLowerCase();
    const refContent = req.body.refContent;
    const referrerEmail = req.body.referrerEmail.toLowerCase();
  
    if (
      applicantEmail.length === 0 ||
      refContent.length === 0 ||
      referrerEmail.length === 0
    ) {
      req.flash("message", "Bitte geben Sie Email und Passwort an.");
      res.redirect("/referral");
    } else {
      const client = await pool.connect();
  
      try {
        await client.query("BEGIN");
        client.query(
          "INSERT INTO refs (content, email, referrer_email) VALUES ($1, $2, $3)",
          [refContent, applicantEmail, referrerEmail],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              client.query("COMMIT");
              console.log(
                "mpfehlungsschreiben von " +
                  referrerEmail +
                  " für " +
                  applicantEmail +
                  " wurde eingereicht."
              );
              req.flash(
                "message",
                "Das Empfehlungsschreiben wurde abgesendet. Vielen Dank."
              );
              res.redirect("/referral");
            }
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
  });
  
  module.exports = router;