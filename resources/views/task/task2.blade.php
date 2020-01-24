

<!DOCTYPE html>

<html>
<head>
    <title>TASK PAGE</title>
</head>
<link href="{{ asset('css/app.css') }}" rel="stylesheet">
<link href="{{asset('bower_components/semantic/dist/semantic.min.css')}}" rel="stylesheet">
<link href="{{asset('bower_components/semantic/dist/semantic.css')}}" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    	input[type=text] {
  			width: 100%;
  			position:relative;
  			justify-content: center;
  			padding: 12px 20px;
  			margin: 8px 0;
  			display: inline-block;
  			border: 1px solid #ccc;
  			box-sizing: border-box;
		}

    	form {border: 3px solid #f1f1f1;}
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
            padding: 20px 20px;
            }
            .space{
                line-height: 2
            }
            .back{
              background-color: #adabaa;
              color: white;
              padding: 14px 20px;
              margin: 8px 0;
              border: none;
              cursor: pointer;
              display: flex;
              align-content: center;
              justify-content: center;
              align-items: center;

            }

			button {
  			background-color: #4CAF50;
  			color: white;
  			padding: 14px 20px;
  			margin: 8px 0;
  			border: none;
  			cursor: pointer;
  			display: flex;
  			align-content: center;
  			justify-content: center;
  			align-items: center;
  			
      
			}
	</style>

	<body>
			

		<div class ="container"style="background-color:#f1f1f1" >
			<div class ="container title m-b-md" >
                <h1>DATA LIST</h1>
            
            </div> 
			
            @foreach ($task as $task)
                    	
                <div class="links border space">
                            	
                    <a href="/Chapter1/task/test/{{ $task->id }}" class="header">{{ $task->title }}</a><br> 
            
                </div>
            @endforeach
       
                    	
           
        	

        	<form action = /Chapter1/task/>
        		<button type="submit" style="color:White;background-color: #ff0015;">Back</button>
        	</form>
    	</div>
   </body>

