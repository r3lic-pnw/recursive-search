const search = require('./search.js');

const folder = process.argv[2];

search(folder).finally(fileList => console.log(fileList));