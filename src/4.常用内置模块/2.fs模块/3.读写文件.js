const fs = require("fs");
const path = require("path");
const content = "hello fs\n";
fs.writeFile(
  path.resolve(__dirname, "./hello.txt"),
  content,
  { flag: "a+" },
  (err) => {
    console.log(err);
  }
);

fs.readFile("./hello.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
    return err;
  }
  console.log(data);
});
