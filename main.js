const search = require('./search.js');

const folder = process.argv[2];

search(folder).then(fileList => console.log(fileList));