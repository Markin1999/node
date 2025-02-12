import * as fs from "node:fs";
const filePath = "output.txt";
fs.writeFile(filePath, "Ciao", { encoding: "utf-8" }, function (error, data) {
  if (error) {
    console.error(error);
    return;
  }
  console.log(filePath);
});
