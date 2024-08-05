const fs = require("fs");

let md = `
This is a new file
============

ES6 Template String are cool

*Template Strings
`;

// fs.writeFile("javascript.md", md.trim(), () => {
//   console.log("Markdown file created");
// });

fs.writeFile("javascript.md", md.trim(), (err) => {
  if (err) {
    throw err;
  }
  fs.appendFileSync("javascript.md", "\n\n ###I am learning Nodejs, guys. ");
  console.log("Now I have appended to the file");
});
