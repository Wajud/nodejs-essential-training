const fs = require("fs");

// fs.readdir("./", (err, files) => {
//   if (err) {
//     throw err;
//   }

//   console.log(files);
// });

fs.readFile("word.txt", "UTF-8", (err, text) => {
  if (err) {
    throw err;
  }

  console.log(text);
});
