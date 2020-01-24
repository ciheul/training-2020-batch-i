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
@section('isActiveCreate', 'active')

@section('content')

<div class="ui container">
  <div class="ui segments">
    <div class="ui secondary  segment">
      <h2 class="ui header">  Task Create </h2>
    </div>
    <div class="ui segment">
      <form class="ui form">

        <input hidden value="{{ csrf_token() }}" id="token" >

        <div class="field">
          <label>Title</label>
          <input type="text" name="title" placeholder="Title">
        </div>
        <div class="field">
          <label>Body</label>
          <textarea type="text" id="body" name="body" placeholder="Body" ></textarea>
        </div>

        <div class="field">
          <label>Status</label>
          <select id="status" name="status">
            <option value="TODO">TODO</option>
            <option value="IN_PROGRESS">IN PROGRESS</option>
            <option value="DONE">DONE</option>
          </select>
        </div>

        <div class="ui small basic icon buttons">
          <a href="/chap1/task/list" class="ui button"><i class="delete icon"></i></a>
          <button class="ui button btn-submit-create"><i class="save icon"></i></button>
        </div>
      </form>

    </div>
  </div>
  <footer class="row">

  </footer>
</div>

@stop

@section('javascript')
<!-- <script src="{{ asset('js/Chap2/Task/add.js')}}"></script> -->
@stop
