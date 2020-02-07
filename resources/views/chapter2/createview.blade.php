@extends('chapter2.master')

<meta name="csrf-token" content="{{csrf_token()}}">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="{{ asset('bower_components/jquery/dist/jquery.min.js') }}"></script>

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

            .space{
                line-height: 2
            }
</style>
<body>
		<div class ="container"style="background-color:#f1f1f1" >
			<div class ="ui items" >
				<div class ="item">
					<div class = "content">
						<div class="header flex-center" style="padding-top: 60px ">
                <h1>Create New Data</h1>
            </div>
          </div>
        </div>
      </div>
      <div class ="ui items" >
				<div class ="item">
					<div class = "content">
						<div class="header" style="padding-top: 60px;width: 100% ">
       				<div class="container">
    						<div class="ui input m-b-md" style="width: 100%">
    							<input type="text"  placeholder="Title" id="title" name="title" required>
    						</div><br>
                <div class="ui form m-b-md">
    							<div class="field" name="body" required>
    								<label>Content</label>
    								<textarea id="body"></textarea>
    							</div>
    						</div>
    						<label>Progress</label>
								<select class="ui selection dropdown" id="status" name="status">
  									<option  value="TODO">TODO</option>
  									<option  value="IN_PROGRESS">INPROGRESS</option>
  									<option  value="DONE">DONE</option>
								</select> <br>
    						<button class="ui primary button" id="create">Create</button>
   						</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</body>
