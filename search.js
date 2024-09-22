const {readdir} = require('fs').promises;

async function search (folder) {
  const contents = await readdir(folder, {withFileTypes: true});

  const files = contents.map(item => {
    if (item.isDirectory()) {
      search(item.path);
    } else {return item;}
  });

  return files;
}

module.exports = search;