process.env.DISABLE_NOTIFIER = true;
var elixir = require('laravel-elixir');
elixir.config.assetsPath = '';
elixir.config.css.less.folder = '';
elixir.config.css.sass.folder = '';
elixir.config.js.folder = '';
elixir.config.css.folder = '';

elixir(function(mix) {


  //Vendor Styles
  mix.less([
    'bower_components/bootstrap/less/bootstrap.less',
    ],'public/css/vendor-less-compiled.css');


  mix.styles([
    'public/css/vendor-less-compiled.css'
    ],'public/css/vendor.css');


  //Custom Styles
  mix.sass([
    'resources/sass/main.scss',
    ],'public/css/custom-sass-compiled.css');

  mix.styles([
    'public/css/custom-sass-compiled.css'
    ],'public/css/app.css');

});

elixir(function(mix) {

  mix.browserSync(
  {
    files:[
    'app/**/*',
    'public/**/*',
    'resources/views/**/*'
    ],
    proxy:"localhost:9000",
    port:9001,
  });

});