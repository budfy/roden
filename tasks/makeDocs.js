const {
  src,
  dest
} = require('gulp');

module.exports = function makeDocs() {
  return src('build/**/*.*')
    .pipe(dest('docs/**/*.*'))
}