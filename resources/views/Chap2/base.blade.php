<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title')</title>

     <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{asset('css/app.css')}}" rel="stylesheet">
    <link href="{{asset('bower_components/semantic/dist/semantic.min.css')}}" rel="stylesheet">
    <link href="{{asset('bower_components/semantic/dist/semantic.css')}}" rel="stylesheet">
    <link href="{{asset('bower_components/datatables.net-dt/css/jquery.dataTables.min.css')}}" rel="stylesheet">
    <link href="{{asset('bower_components/daterangepicker/demo/css/daterangepicker.css')}}" rel="stylesheet" type="text/css">

    <style>
      body {
        background-color: #f4f4f4;
      }
      .easy-autocomplete {
        margin-left: -39px;
      }
      #top-nav {
        background-color: white;
        z-index: 9999;
        padding-left: 20px;
        padding-right: 20px;
        /*color: white;*/
      }
      #content {
        margin-top: 5em;
        margin-bottom: -5em;
        width: 90%;
      }
      #unit-name {
         margin-left: 10px;
         font-size: 18px;
         font-weight: bold;
         /*background-color: #db2828;*/
         padding: 5px;
         color: black;
         border-radius: 3px
      }
      .menu-item {
        height: 100%
      }
      #bottom-nav {
        display: none;
      }
    </style>

    @yield('css')

  </head>

  <body>
    <!-- Top Navbar -->
    <div class="ui fixed secondary pointing menu" id="top-nav">
      <div class="menu">
        <a class="item" href="#" style="padding-left: 0; width: 220px">
          <div id="unit-name">Chapter 2</div>
        </a>
        <a href="/chap2/task"
           class="@yield('isActiveTaskList') item menu-item">
          <i class="table icon"></i> Task
        </a>
        <a href="/chap2/task/create"
           class="@yield('isActiveCreate') item menu-item">
          <i class="plus icon"></i> Create
        </a>
      </div>
      <div class="right menu">
        <div id="other-menu-dropdown" class="ui dropdown icon item menu-item">
          <i class="bars icon"></i>
          <div class="menu">
            <a class="item" href="/logout">Logout</a>
          </div>
        </div>
      </div>
    </div>

    @yield('content')

    <!-- Scripts -->
    <script src="{{ asset('js/app.js')}}"></script>

    <!-- <script src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script> -->

    <script src="{{ asset('bower_components/semantic/dist/semantic.js')}}"></script>
    <script src="{{ asset('bower_components/semantic/dist/semantic.min.js')}}"></script>
    <script src="{{ asset('bower_components/jquery/dist/jquery.min.js')}}"></script>
    <script src="{{ asset('bower_components/jquery/dist/jquery.js')}}"></script>
    <script src="{{ asset('bower_components/datatables.net/js/jquery.dataTables.js')}}"></script>
    <script src="{{ asset('bower_components/datatables.net/js/jquery.dataTables.min.js')}}"></script>

    <script src="{{ asset('bower_components/moment/moment.js')}}"></script>
    <script src="{{ asset('bower_components/daterangepicker/lib/daterangepicker/daterangepicker.min.js')}}"></script>

    @yield('javascript')

  </body>
</html>
