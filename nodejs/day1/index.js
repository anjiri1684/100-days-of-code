const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf-8"
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));

    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\nNice to meet you"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
    const newdata = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf-8"
    );
    console.log(newdata);
  } catch (err) {
    console.error(err);
  }
};

fileOps();

// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you😁😁",
//   (err) => {
//     if (err) throw err;
//     console.log("Write Complete");

//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\nIve been updated",
//       (err) => {
//         if (err) throw err;
//         console.log("Appended succesfully");

//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "newReply.txt"),
//           "\nThis is a replay",
//           (err) => {
//             if (err) throw err;
//             console.log("Renamed succesfully");
//           }
//         );
//       }
//     );
//   }
// );
