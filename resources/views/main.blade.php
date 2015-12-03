<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Rob Meharg | Web Developer and Chill Dude</title>
    <meta name="description" content="Web developer and general programmer from London, Ontario, with experience across the full-stack">
    <meta name="keywords" content="london ontario web developement, london ontario php, london ontario laravel, london ontario javascript, laravel developer, php developer,">
    <!-- The  Stylin', Profiln', makin it ...worthwhile'n?-->
    <link rel="stylesheet" href="/css/vendor.css">
    <link rel="stylesheet" href="/css/app.css">
    <!-- Juan Fonts De Leon -->
    <link href="//fonts.googleapis.com/css?family=Open+Sans:700,300,400" rel="stylesheet" type="text/css">
    <!-- I don't have a pun but this is the Mobile part -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
</head>
<body>

    @include('header')

    

    @include('footer')

    @yield('scripts')
    <script type="text/javascript">
       /* $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': '<?= csrf_token() ?>'
            }
        });*/
    </script>
</body>
</html>
