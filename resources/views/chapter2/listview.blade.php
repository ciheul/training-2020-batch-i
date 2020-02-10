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
	<div class ="ui main container"style="background-color:#f1f1f1;width: 90%; margin-top: 60px" >
    <div class="ui stackable grid">
      <!-- LEFT: FILTER -->
      <div class="three wide column">
        <!-- Reset Box -->
        <div class="ui secondary segment">
          <div class="ui grid">
            <div class="eight wide column"><b>FILTER</b></div>
              <div class="right aligned eight wide column">
                <a href="/Chapter2/">Reset</a>
              </div>
          </div>
        </div>

        <!-- Nomor -->
        <div class="ui segments">
          <div class="ui segment">
            <p><b>Search Number</b></p>
            <div class="ui labeled input" style="width: 80%">
              <div class="ui label">Title</div>
              <input type="long" placeholder="Title" name="title-search" id="title-search"/>
            </div>
            <div class="ui labeled input" style="width: 80%; margin-top: 10px">
              <div class="ui label">Body</div>
              <input type="long" placeholder="Body" name="body-search" id="body-search"/>
            </div>
            <div class="ui labeled input" style="width: 90%; margin-top: 10px">
              <div class="ui label id-search"> ID </div>
              <input type="long" placeholder="ID" name="id-search" id="id-search"/>
            </div>
          </div>
        </div>

        <!-- options -->
        <div class="ui segments">
          <div class="ui segment">
            <p><b>Status</b></p>

              <select class="ui selection fluid dropdown status" multiple="" id="status-dropdown">
                <option  value="">Status</option>
                <option  value="TODO">TODO</option>
                <option  value="IN_PROGRESS">INPROGRESS</option>
                <option  value="DONE">DONE</option>
              </select>

          </div>
        </div>

        <!-- Tanggal -->
        <div class="ui segments">
          <div class="ui segment">
            <p><b>Tanggal</b></p>
            <div class="ui labeled input" style="width: 80%; margin-top:10px">
              <div class="ui label">Created At</div>
              <input type="text" name="createdatetimes" values="" id="created-input" />
            </div>
            <div class="ui labeled input" style="width: 80%;margin-top:10px">
              <div class="ui label">Updated At</div>
              <input type="text" name="updatedatetimes" values="" id="updated-input" />
            </div>

          </div>
        </div>
      </div>

      <!-- main content -->
      <div class="thirteen wide column">
        <div class="ui grid">
          <!-- sorting dan jumlah row -->
          <div class="thirteen wide column">
            <div class="field sort-container" style="float:right;margin-left:20px;">
              <strong style="margin-right: 10px">Urutkan: </strong>
              <select class="ui sort dropdown" name="sortBy" id="sortBy">
                <option selected="selected" value="id">ID terendah</option>
                <option value="-id">ID tertinggi</option>
                <option value="-created_at">Recently Created</option>
                <option value="-updated_at">Recently Updated</option>
                <option value="title">Title (0-Z)</option>
                <option value="-title">Title (Z-0)</option>
              </select>
            </div>

            <div style="float:right;">
              <strong style="margin-right: 10px">Tampilkan: </strong>
              <select class="ui compact selection dropdown" name="RowLimit" id="RowLimit">
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option selected="selected" value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
        </div>

        <!-- total jumlah info -->
        <div class="column" id="count-list" style="margin-bottom: 10px"></div>

        <!-- table po  -->
        <div id="data-container"></div>
      </div>
    </div>
  </div>
  <script type="text/template" id="data-template">
    <div class ="flex-center">
        <div class="ui stackable grid">
          <div class ="ui items" >
            <div class ="item">
              <div class = "content">
                <div class="header m-b-md" style="">
                  <h1>DATA LIST</h1>
                </div>
                <table class="ui celled striped table" style="width:100%; float:right " id="dataListTable">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Time Created</th>
                    <th>Time Updated</th>
                    <th>Status</th>
                    <th></th>
                  </tr></thead>
                  <tbody>
                    <tr></tr>
                  </tbody>
                </table>
                <div class="ui buttons page" style="float:right; margin-top:12px">
                  <button class="ui labeled icon button" name="previous" id="previous">
                    <i class="left chevron icon"></i>
                    Previous Page
                  </button>
                  <button class="ui right labeled icon button" name="next" id="next" >
                    Next Page
                    <i class="right chevron icon"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </script>
</body>
