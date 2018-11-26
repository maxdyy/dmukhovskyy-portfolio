const fs = require("fs");

const createSiteMapObject = () => {
  const fileObj = {};
  const walkSync = dir => {
    // Get all files of the current directory & iterate over them
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      // Construct whole file-path & retrieve file's stats
      const filePath = `${dir}${file}`;
      const fileStat = fs.statSync(filePath);

      if (fileStat.isDirectory()) {
        // Recurse one folder deeper
        walkSync(`${filePath}/`);
      } else {
        // Construct this file's pathname excluding the "pages" folder & its extension
        const cleanFileName = filePath
          .substr(0, filePath.lastIndexOf("."))
          .replace("pages/", "");

        // Add this file to `fileObj`
        fileObj[`/${cleanFileName}`] = {
          page: `/${cleanFileName}`,
          lastModified: fileStat.mtime
        };
      }
    });
  };

  // Start recursion to fill `fileObj`
  walkSync("pages/");

  return fileObj;
};

const pathsObj = createSiteMapObject();

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
  ${Object.keys(pathsObj).map( (path) => {
      if (path === "/_document" || path === "/_error" || path === "/blogPost") {
        return;
      } else {
        return `<url>
          <loc>https://dmukhovskyy.com${path}</loc>
          <lastmod>${formatDate(new Date(pathsObj[path].lastModified))}</lastmod>
        </url>`;
      }
    }
  )}
</urlset>`;

fs.writeFileSync("./static/sitemap.xml", sitemapXml);

console.log("SiteMap exported");

