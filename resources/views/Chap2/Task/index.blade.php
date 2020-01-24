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
    <div class="ui secondary  segment">
      <h2 class="ui header">  Task List </h2>
    </div>

    <div class="ui segment">
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

      <div class="ui relaxed divided list">
        @foreach ($tasks as $task)
        <div class="item">
          <div class="content">
            <div class="ui two column stackable grid">
              <div class="ten wide column">
                  <a href="/chap2/task/{{$task->id}}/detail" class="header"> {{ $task->title }}</a>
              </div>
              <div class="six wide column">

                 <div class="ui small basic icon right floated buttons">
                  <button class="ui button btn-delete" data-id="{{$task->id}}"><i class="trash alternate icon"></i></button>
                  <a href="/chap2/task/{{$task->id}}/detail" class="ui button"><i class="eye icon"></i> </a>
                  <a href="/chap2/task/{{$task->id}}/edit" class="ui button"><i class="edit icon"></i></a>

                </div>

            </div>
          </div>


        </div>

      </div>



      @endforeach
    </div>
  </div>
</div>
<footer class="row">

</footer>
</div>




@stop

@section('javascript')
<!-- <script src="{{ asset('js/Chap2/Task/delete.js')}}"></script> -->
@stop
