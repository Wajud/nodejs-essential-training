const fs = require("fs");

if (fs.existsSync("your-files-here")) {
  console.log("directory already exist");
} else {
  fs.mkdir("your-files-here", (err) => {
    if (err) throw err;
    console.log("directory was created");
  });
}
