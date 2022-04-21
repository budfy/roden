const {
  src,
  dest
} = require('gulp');
const bs = require('browser-sync');

module.exports = function video() {
  return src('src/**/*.+(mp4|avi|webm|wmv|flv|mov|mkv)')
    .pipe(dest('build'))
    .pipe(bs.stream())
}