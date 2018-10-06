const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const CONSTANTS = require("./mail");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  // CUSTOM ROUTES GO HERE
  server.get("/project/:slug", (req, res) => {
    const mergedQuery = Object.assign({}, req.query, req.params);
    return app.render(req, res, "/project", mergedQuery);
  });
  // THIS IS THE DEFAULT ROUTE, DON'T EDIT THIS
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  // POST EMAIL
  server.post("/api/contact", (req, res) => {
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: CONSTANTS.MAIL_CONSTANTS.serverEmail,
        pass: CONSTANTS.MAIL_CONSTANTS.serverEmailPass
      }
    });

    let mailOptions = {
      from: CONSTANTS.MAIL_CONSTANTS.fromEmail,
      to: CONSTANTS.MAIL_CONSTANTS.toEmail,
      subject: `New Message From ${req.body.name}`,
      html: `
          <b>Name/Company:</b> ${req.body.name}
          <br>
          <b>Email:</b> ${req.body.email}
          <br>
          <b>Telephone:</b> ${req.body.tel}
          <br>
          <b>Message:</b> ${req.body.message}
        `
    };

    transporter.sendMail(mailOptions, function(err) {
      if (err) console.log(err);
      else console.log("Email Sent!");
    });

    res.send("success");
  });

  const port = process.env.PORT || 3000;

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready to rock & roll on port:${port} 😎 🔥`);
  });
});
