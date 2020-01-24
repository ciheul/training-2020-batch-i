@extends('Chap1.app')
@section('content')

<div class="ui container">
<div class="ui segments">
  <div class="ui secondary  segment">
     <h2 class="ui header">  Task Page </h2>
  </div>
  <div class="ui segment">
    <div class="ui relaxed divided list">
        @foreach($tasks as $task)
        <div class="item">
          <div class="content">
            <a href="/chap1/task/{{ $task->id }}" class="header">{{ $task->title }}</a>
          </div>
        </div>
        @endforeach
      </div>
  </div>
</div>
</div>
@endsection
