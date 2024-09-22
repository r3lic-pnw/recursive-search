/**
 * Checks if an array of Dirent objects contains a directory.
 *
 * @param {Dirent[]} fileList - The array of Dirent objects to check.
 * @returns {boolean} - True if the array contains a directory, false otherwise.
 */

const containsDir = (fileList) => {
  for (const file of fileList) {
    if (file.isDirectory()) return true;
  return false;

module.exports = containsDir;