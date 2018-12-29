const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const CONSTANTS = require("./mail");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const Sendgrid = require("sendgrid")(CONSTANTS.MAIL_CONSTANTS.SENDGRID_API_KEY);

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  // CUSTOM ROUTES GO HERE
  server.get("/robots.txt", (req, res) => {
    return res.redirect("static/robots.txt");
  });

  server.get("/sitemap.xml", (req, res) => {
    return res.redirect("static/sitemap.xml");
  });

  server.get("/blogPost/:slug", (req, res) => {
    const mergedQuery = Object.assign({}, req.query, req.params);
    return app.render(req, res, "/blogPost", mergedQuery);
  });

  // THIS IS THE DEFAULT ROUTE, DON'T EDIT THIS
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  // POST EMAIL
  server.post("/api/contact", (req, res) => {
    const sgReq = Sendgrid.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: {
        personalizations: [
          {
            to: [{ email: CONSTANTS.MAIL_CONSTANTS.toEmail }],
            subject: `Dmukhovskyy Portfolio enquiry from: ${req.body.name}`
          }
        ],
        from: {
          email: req.body.email,
          name: req.body.name
        },
        content: [
          {
            type: "text/plain",
            value: `
              Name/Company: ${req.body.name}
              Email: ${req.body.email}
              Message: ${req.body.message}
            `
          }
        ]
      }
    });

    Sendgrid.API(sgReq, err => {
      if (err) {
        console.log(err);
        res.send("error");
      } else {
        console.log("Email Sent! 📧");
        res.send("success");
      }
    });
  });

  const port = process.env.PORT || 3000;

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Ready to rock & roll on port --> ${port} 😎 🔥`);
  });
});
