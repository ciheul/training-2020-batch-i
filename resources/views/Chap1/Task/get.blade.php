@extends('Chap1.app')
@section('content')
<div class="ui container">
  <div class="ui segments">
    <div class="ui secondary segment">
      <h2 class="ui  header">  Task View </h2>
    </div>
    <div class="ui segment">
      <h3> {{ $task->title }} </h3>
    </div>
     <div class="ui segment">

        <p> {{ $task->body }} </p>

    </div>
  </div>
  <div class="ui small basic icon right floated buttons">


    <a href="/chap1/task/list" class="ui button"><i class="delete icon"></i></a>

    <a href="/chap1/task/{{ $task->id }}/edit" class="ui button"><i class="edit icon"></i></a>

     <form method="POST" action="/chap1/task/{{ $task->id }}">
        {{ csrf_field() }}
        {{ method_field('DELETE') }}
       <button class="ui button"><i class="trash icon"></i></button>
    </form>

  </div>
</div>

@endsection
