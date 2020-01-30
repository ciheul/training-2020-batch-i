


<!doctype html>
@extends('Chap2.base')

@section('css')
  <style>
    .select-child:hover {
      cursor: pointer;
    }
    .ui.table.exa tr td {
      border-top: 0px !important;
    }
    .area-rate {
      width: 120px;
    }
    .regional-rate {
      width: 120px;
    }
  </style>
@stop

@section('title','Chap 2 - Task ')
@section('isActiveTaskList', 'active')

@section('content')

<div  class="ui main container" style="margin-top:6.5em;margin-bottom:5em;width:95%;">
    <h2 >Task - Data List <i class="grey info circle icon" data-content="Purchase Order Data List" data-position="right center"></i></h2>

    <div class="ui stackable grid">
      <!-- LEFT: FILTER -->
      <div class="three wide column">
        <!-- Reset Box -->
        <div class="ui secondary segment">
          <div class="ui grid">
            <div class="eight wide column"><b>FILTER</b></div>
              <div class="right aligned eight wide column">
                <a href="{{url('/po/list')}}">Reset</a>
              </div>
          </div>
        </div>

        <!-- Nomor -->
        <div class="ui segments">
          <div class="ui segment">
            <p><b> Search </b></p>
            <div class="ui labeled input" style="width: 100%">
              <div class="ui label">Title</div>
              <input type="Text" placeholder="Title" name="title" id="title"/>
            </div>
            <div class="ui labeled input" style="width: 100%; margin-top: 10px">
              <div class="ui label">Body</div>
              <input type="long" placeholder="Body" name="body" id="body"/>
            </div>
          </div>
        </div>

        <!-- options -->
        <div class="ui segments">
          <div class="ui segment">
            <p><b>Status</b></p>
            <div class="ui fluid selection dropdown" id="user-dropdown">
              <input id="user-hidden" type="hidden" name="user" value="">
              <div class="text" id="user-text">Semua User</div>
              <i class="dropdown icon"></i>
              <div class="menu" id="user-dropdown-menu"></div>
            </div>
          </div>
        </div>

        <!-- harga -->
        <div class="ui segments">
          <div class="ui segment">
            <p><b>Tanggal</b></p>
            <div class="ui labeled input" style="width: 100%">
              <div class="ui label">Date</div>
              <input type="long" placeholder="Minimum" name="min_price" id="min_price"/>
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
                <option value="nomor_po">No. PO Terendah</option>
                <option value="-nomor_po">No. PO Tertinggi</option>
                <option selected="selected" value="total_harga">Harga Terendah</option>
                <option value="-total_harga">Harga Tertinggi</option>
              </select>
            </div>

            <div style="float:right;">
              <strong style="margin-right: 10px">Tampilkan: </strong>
              <select class="ui compact selection dropdown" name="sortByRow" id="sortByRow">
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
        <div class="column" id="count-po" style="margin-bottom: 10px"></div>
        <!-- table po  -->
        <div id="po-container"></div>
          <div class="po-table">
            <table id="po-table" class="ui celled table" style="width:100%;font-size: 11px">
              <thead>
                <tr class="center aligned">
                <th>Nomor PO</th>
                <th>Line Item</th>
                <th>PO Date</th>
                <th>PID</th>
                <th>User</th>
                <th>Ubis</th>
                <th>Nama Vendor</th>
                <th>Project Type</th>
                <th>Total Harga</th>
                <th>FL Data</th>
                <th>FL Outs</th>
                <th>Cutoff Date</th>
                <th>Text</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

@stop

@section('javascript')

@stop
