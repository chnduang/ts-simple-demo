const path = require('path');

const entryPath = path.join(__dirname, '..', 'src');
const pagesPath = path.join(__dirname, '..', 'src/pages');
const distPath = path.join(__dirname, '..', 'dist');

module.exports = {
  entryPath,
  distPath,
  pagesPath,
};
