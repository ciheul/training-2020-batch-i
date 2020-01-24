<!-- <!DOCTYPE html>
 -->

<head>
    <title>TASK PAGE</title>
</head>

<link href="{{ asset('css/app.css') }}" rel="stylesheet">
<link href="{{asset('bower_components/semantic/dist/semantic.min.css')}}" rel="stylesheet">
<link href="{{asset('bower_components/semantic/dist/semantic.css')}}" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <style>
            html, body {
                background-color: #fff;
                color: #00000;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 38px;
            }

            .links > a {
                color: #251245;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .border {
                border-style:groove;
                border-color:#00000;
            }
            .m-b-md {
                margin-bottom: 30px;
            }
            .container {
            padding: 20px 10px;
            }
            .space{
                line-height: 2
            }   
    </style>
    <body >
            <div class ="container title m-b-md" >
                <h1>TASK PAGE</h1>
            
            </div>    
            
            <div class="container" style="background-color:#f1f1f1; align-items: center; width: 60% ">    
                <div class ="links border space">

                    <a href="/Chapter1/task/create/">Create</a><br>
                    <a href="/Chapter1/task/show/">Show & Edit</a><br>
                    <!-- 
                        <div class="ui relaxed divided list">
                            @foreach ($task as $task)
                             <div class="item">
                                <div class="content">
                                <a href="/Chapter1/task/{{ $task->id }}"></a><br>
                    
                            @endforeach
                                </div> -->
                </div>
            </div>
                   

               
            

    </body>
</html>
