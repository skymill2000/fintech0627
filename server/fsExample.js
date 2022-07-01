var fs = require("fs");

console.log("first func");

var data = "none";
fs.readFile("./test.txt", "utf8", function (err, result) {
  if (err) {
    console.error(err);
    throw err;
  } else {
    data = result;
    console.log(data);
    console.log("third func");
  }
});
