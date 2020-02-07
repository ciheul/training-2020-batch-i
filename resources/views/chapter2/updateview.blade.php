@extends('chapter2.master')

<meta name="csrf-token" content="{{csrf_token()}}">
<meta name="viewport" content="width=device-width, initial-scale=1">

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

<body>
		<div class ="container"style="background-color:#f1f1f1" >
			<div class ="ui items" >
				<div class ="item">
					<div class = "content">
						<div class="header flex-center" style="padding-top: 60px ">
                  <h1>EDIT DATA</h1>
            </div>
          </div>
        </div>
      </div>
      <div class ="ui items" >
				<div class ="item">
					<div class = "content">
						<div class="header" style="padding-top: 60px;width: 100% ">
       				<div class="container" id="edit-data">
    						<input class="id" hidden type="text" name="id" id ="id" value="{{ $id }}">
    							<div class="ui input m-b-md" style="width: 100%">'
                    <input class="title" type="text" id="title" name="title">
                  </div><br>
                  <div class="ui form m-b-md">
                    <div class="field body">'
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
                <button class="ui button" type="button" id="edit" style="box-sizing:border-box">Edit</button>
        			</div>
            </div>
          </div>
        </div>
      </div>
    </div>
</body>
