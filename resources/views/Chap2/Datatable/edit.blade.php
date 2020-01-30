<!doctype html>
@extends('Chap2.base')

@section('css')
<style>
  .container{
    margin-top: 70px;
  }
</style>
@stop

@section('title','Chap 2 - Task ')
@section('isActiveList', 'active')

@section('content')

<div class="ui container">
  <div class="ui segments">
    <div class="ui secondary  segment">
      <h2 class="ui header">  Task Edit </h2>
    </div>
    <div class="ui segment">
      <form class="ui form" >
        <input hidden type=""  value="{{$id}}" name="id" id="task_id">
        <div class="field">
          <label>Title</label>
          <input type="text" class="data-title" name="title" placeholder="Title">
        </div>
        <div class="field">
          <label>Body</label>
          <textarea type="text" class="data-body" id="body" name="body" placeholder="Body" ></textarea>
        </div>

        <div class="field">
          <label>Status</label>
          <select id="status" name="status">
            <option value="TODO">TODO</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="DONE">DONE</option>
          </select>
        </div>

        <div class="ui small basic icon buttons">
          <a href="/chap2/task" class="ui button"><i class="delete icon"></i></a>
          <button  class="ui button btn-submit-edit"><i class="save icon"></i></button>
        </div>
      </form >
    </div>
  </div>
  <footer class="row">

  </footer>
</div>

@stop

@section('javascript')

@stop
