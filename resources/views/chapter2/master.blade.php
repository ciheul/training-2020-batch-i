<!doctype html>
<html>

    <meta name="csrf-token" content="{{csrf_token()}}">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="description" content="">

    <title>@yield('title')</title>

    <link href="{{asset('css/app.css')}}" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link href="{{asset('bower_components/datatables.net-dt/css/jquery.dataTables.min.css')}}" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css">

    <head>


    </head>

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
         font-size: 20px;
         font-weight: bold;

         padding: 5px;
         color: Black;
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

  <body>
    <div class="ui fixed secondary pointing menu" id="top-nav">
      <div class="menu">
        <a class="item" href="#" style="padding-left: 0; width: 220px">
          <div id="unit-name">Chapter 2</div>
        </a>
        <a href="/Chapter2/create"
           class="@yield('isActiveDashboardMenu') item menu-item">
          <i class="plus icon"></i> Create New
        </a>
        <a href="/Chapter2/"
           class="@yield('isActiveOkrMenu') item menu-item">
          <i class="edit icon"></i> Show All Data
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

    <div id="bottom-nav">
      <div class="ui center aligned three column grid">
        <div class="column">
          <a href="/hcm/dashboard">
            <i class="table large @yield('isActiveDashboardResponsiveMenu') icon" style="margin-top: -3px; color: lightgrey"></i>
          </a>
        </div>
        <div class="column">
          <a href="/hcm/okr/list">
            <i class="briefcase large @yield('isActiveOkrResponsiveMenu') icon" style="margin-top: -3px; color: lightgrey"></i>
          </a>
        </div>
        <div class="column">
          <a href="/hcm/notification">
            <i class="bell large @yield('isActiveNotifResponsiveMenu') icon" style="margin-top: -3px; color: lightgrey"></i>
          </a>
        </div>
      </div>
    </div>

    <script src="http://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="{{ asset('bower_components/datatables.net/js/jquery.dataTables.min.js') }}" defer></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js"></script>

    <!-- Styles -->
    <script src="{{ asset('js/app.js')}}"></script>
    @yield('javascript')
  </body>
</html>

