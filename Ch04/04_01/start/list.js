// const path = require("path");
// const util = require("util");
// const v8 = require("v8");

// console.log(path.basename(__filename));

// const dirUploads = path.join(__dirname, "www", "files", "uploads");
// console.log(dirUploads);

// util.log(path.basename(__filename));
// util.log(v8.getHeapCodeStatistics());

const fs = require("fs");

// const files = fs.readdirSync("./");
fs.readdir("./", (err, files) => {
  if (err) {
    throw err;
  }
  console.log(files);
});

console.log("reading files...");
// console.log(files);