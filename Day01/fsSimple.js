const fs = require("fs");

// import * as fs from 'fs';

const readAndWriteCallbackHell = () => {
  fs.readFile('files/fsSimple/file1.txt', 'utf-8', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
    fs.writeFile('files/fsSimple/file2.txt', data, (err) => {
      if (err) {
        throw err;
      }
    });
  });
};

const readAndWritePromises = () => {

};

const readAndWriteAsyncAwait = async () => {};
//
// export {
//   readAndWriteAsyncAwait,
//   readAndWritePromises,
//   readAndWriteCallbackHell,
// };
//

console.log(readAndWriteCallbackHell());
