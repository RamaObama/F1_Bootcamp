const fs = require("fs");
const {promises: fsPromises} = require("fs");

// import * as fs from 'fs';

const readAndWriteCallbackHell = () => {
  fs.readFile('files/fsSimple/file1.txt', 'utf-8', (err, data) => {
    if (err) {
      throw err;
    } else {
      // console.log(data);
      fs.writeFile('files/fsSimple/file2.txt', data, (err) => {
        if (err) {
          throw err;
        }
      });
    }
  });
};

const readAndWritePromises = () => {
  // (async () => {
  //   const data = await fs.promises.readFile('files/fsSimple/file1.txt', 'utf-8');
  //   // console.log(data);
  //   await fs.promises.writeFile('files/fsSimple/file2.txt', data);
  // })();

  fs.promises.readFile("files/fsSimple/file1.txt",'utf-8')
    .then((data) => {
      //console.log(""+result);
      fs.promises.writeFile('files/fsSimple/file2.txt', data)
        .then(() => {
          //console.log('FILE saved');
        })
        .catch(err => {
          //console.log(err);
        });
    })
    .catch(function(err) {
      //console.log(error);
    })
};

const readAndWriteAsyncAwait = async () => {
  const fs = require('fs').promises;
  try {
    const data = await fs.readFile('files/fsSimple/file1.txt','utf-8');
    // console.log(data);
    try {
      await fs.writeFile('files/fsSimple/file2.txt', data);
    } catch (err) {
      //console.log(error)
    }
  } catch (err) {
    console.log(err)
  }

};

export {
  readAndWriteAsyncAwait,
  readAndWritePromises,
  readAndWriteCallbackHell,
};
