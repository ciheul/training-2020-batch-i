const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
// .js('resources/js/Chap2/Task/add.js', 'public/js/Chap2/Task')
// .js('resources/js/Chap2/Task/view.js', 'public/js/Chap2/Task')
// .js('resources/js/Chap2/Task/update.js', 'public/js/Chap2/Task')
// .js('resources/js/Chap2/Task/delete.js', 'public/js/Chap2/Task')
// .js('resources/js/Chap2/Task/alert.js', 'public/js/Chap2/Task')
// .js('resources/js/Chap2/Task/get.js', 'public/js/Chap2/Task')
.js('resources/js/Chap2/Datatable/get.js', 'public/js/Chap2/Datatable')
.js('resources/js/Chap2/Datatable/detail.js', 'public/js/Chap2/Datatable')
.js('resources/js/Chap2/Datatable/update.js', 'public/js/Chap2/Datatable')
.js('resources/js/Chap2/Datatable/notif.js', 'public/js/Chap2/Datatable')
.js('resources/js/Chap2/Datatable/delete.js', 'public/js/Chap2/Datatable')
.js('resources/js/Chap2/Datatable/create.js', 'public/js/Chap2/Datatable')
.js('resources/js/Chap2/Datatable/coba.js', 'public/js/Chap2/Datatable')
.sass('resources/sass/app.scss', 'public/css');
