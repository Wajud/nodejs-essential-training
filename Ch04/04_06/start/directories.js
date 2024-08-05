const fs = require("fs");

// fs.renameSync("./assets/logs", "accounts/logs");
// console.log("logs folder moved");

// fs.rmdir("./assets", (err) => {
//   if (err) throw err;
//   console.log("assets directory removed");
// });

fs.readdirSync("./accounts").forEach((file) => {
  fs.renameSync(`./accounts/${file}`, `./library/${file}`);
});

console.log("Files moved!");

fs.rmdirSync("./accounts");
console.log("Folder removed");
