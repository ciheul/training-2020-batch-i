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
@section('isActiveTaskList', 'active')

@section('content')

<div class="ui container">
  <div class="ui segments">
    <div class="ui secondary segment">
      <h2 class="ui  header">  Task View </h2>
    </div>
    <div class="ui segment" >
      <h3 id="task_title" class="data-title" >  </h3>
    </div>
    <div class="ui segment">
      <input hidden type="" class="data-body" value="{{$id}}" id="task_id">
      <p id="task_body" class="data-body">  </p>
    </div>
  </div>
  <div class="ui small basic icon left floated buttons">
    <a href="/chap2/task" id="button-edit" class="ui button">
      <i class="step backward icon"></i>
    </a>
  </div>
</div>

@stop

@section('javascript')

@stop

