const mix = require('laravel-mix');

mix.sass('src/app.scss', 'css').sourceMaps()

mix.js('src/app.js', 'js').sourceMaps()

mix.setPublicPath('dist');

mix.browserSync(
   {
      proxy: 'mix.test',  
      files: [
         'dist/css/*.css',
         'dist/js/*.js',
         'index.html'
      ]
 }
);
