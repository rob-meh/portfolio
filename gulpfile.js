process.env.DISABLE_NOTIFIER = true;
var elixir = require('laravel-elixir');
elixir.config.assetsPath = '';
elixir.config.css.less.folder = '';
elixir.config.css.sass.folder = '';
elixir.config.js.folder = '';
elixir.config.css.folder = '';

elixir(function(mix) {

  mix.sass([
    'bower_components/bootstrap/scss/bootstrap.scss',
    'resources/sass/app.scss'
    ]);

});

elixir(function(mix) {

  mix.browserSync(
  {
    files:[
      'app/**/*',
      'public/**/*',
      'resources/views/**/*'
    ],
    proxy:"localhost:8000",
    port:8000,
    reloadDelay: 1000,
  });

});