const {readdir} = require("fs").promises;

function search(folder) {
  return readdir(folder, { withFileTypes: true }).then(contents => {
    if (contents.length === 0) return[];
    return Promise.all(contents.map(item => {
      if (item.isDirectory()) {
        return search(item.path).then(subfileList => ({ path: item.path, subfiles: subfileList }));
      } else {
        return { path: folder, item };
      }
    }))
  }).catch(err => {
      console.error(error));
      return [];
    }
}

module.exports = search;