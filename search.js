const {readdir} = require("fs").promises;

const folder = process.argv[2];

const fileList = await readdir(folder, withFileTypes);

fileList.forEach(file => console.log(file);