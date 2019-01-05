const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

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

  const port = process.env.PORT || 3000;

  server.listen(port, err => {
    if (err) throw err;
    console.log(`Ready to rock & roll on port --> ${port} 😎 🔥`);
  });
});
