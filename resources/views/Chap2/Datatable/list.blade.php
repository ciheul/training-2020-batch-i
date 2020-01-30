<!doctype html>
@extends('Chap2.base')

@section('css')
<style>
  .table-task{
    margin-top: 40px;
    margin-left: -60px;
  }

 .header-filter{
    margin-top: 40px !important;
    margin-left: 30px !important;
    margin-bottom: 10px;

  }

  .item-filter{
    margin-left: 20px;
  }

  .btn-reset-filter{
    background-color: #F3F4F5 !important;
    margin-top: -10px !important;

  }

  .text-right{
    text-align: right !important;
  }
</style>
@stop

@section('title','Chap 2 - Task ')
@section('isActiveTaskList', 'active')

@section('content')

<div class="ui internally  grid">
  <div class="row">
    <div class="three wide column centered header-filter">
      <div class="ui secondary segment item-filter centered">
          <div class="ui header">
            <h5>FILTER
              <a class="text-right" href="/chap2/task"> (RESET) </a>
            </h5>
          </div>
      </div>
      <div class="ui segment item-filter">
          <div class="ui form">
            <div class="ui header"> <h5> Search </h5></div>
              <div class="field">
                <div class="ui labeled input">
                  <div class="ui label"> Title </div>
                <input name="title" id="title" type="text" placeholder="Title">
              </div>
            </div>
            <div class="field">
              <div class="ui labeled input">
                <div class="ui label">
                  Body
                </div>
                <input name="body" id="body" type="text" placeholder="Body">
              </div>
            </div>
          </div>
      </div>
      <div class="ui segments">
        <div class="ui segment item-filter">
          <div class="ui form">
            <div class="field">
              <div class="ui header"> <h5> Status </h5></div>
                <div class="field">
                  <select class="ui search dropdown" name="status" id="status">
                    <option value="">Semua Status</option>
                    <option value="TODO">TODO</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="DONE">DONE</option>
                  </select>
              </div>
            </div>
          </div>
        </div>
        <div class="ui segment item-filter">
            <div class="ui form">
              <div class="field">
                <div class="ui header"> <h5> Tanggal </h5></div>
                <input id="range_tanggal" name="datefilter" type="text">
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="twelve wide centered column ">
      <div class="ui content table-task">
        <table class="ui celled table" id="data-table-task" style="width:100%">

          <div class="ui error message deleted">
            <i class="close icon"></i>
              <div class="header">
              Record has been successfully deleted
              </div>
          </div>

          <div class="ui success message created">
            <i class="close icon"></i>
              <div class="header">
              Record has been successfully created
              </div>
          </div>

          <div class="ui info message updated">
            <i class="close icon"></i>
              <div class="header">
              Record has been successfully updated
              </div>
          </div>

          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
     <div class="thirteen wide column">
        <div class="ui grid">
          <!-- sorting dan jumlah row -->
          <div class="thirteen wide column">
            <div class="field sort-container" style="float:right;margin-left:20px;">
              <strong style="margin-right: 10px">Urutkan: </strong>
              <select class="ui sort dropdown" name="sortBy" id="sortBy">
                <option selected="selected" value="id_task">ID Terendah</option>
                <option value="-id_task">ID Tertinggi</option>
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

      </div>
  </div>
</div>

@stop

@section('javascript')

@stop
