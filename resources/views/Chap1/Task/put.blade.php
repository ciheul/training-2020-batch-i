@extends('Chap1.app')
@section('content')

<div class="ui container">

  <form class="ui form" action="/chap1/task/{{$task->id}}" method="POST">
  <div class="ui segments">
    <div class="ui secondary  segment">
      <h2 class="ui header">  Task Edit </h2>
    </div>
    <div class="ui segment">
      <div class="column">
        {{ csrf_field() }}
        {{ method_field('PUT') }}
          <div class="field">
            <label>Title</label>
            <input value="{{$task->title}}" name="title" placeholder="First Name" />
          </div>
          <div class="field">
            <label>Body</label>
            <textarea placeholder="Tell us more about you..." name="body" rows="5">{{$task->body}}</textarea>
          </div>
      </div>
     </div>
  </div>

  <div class="ui small basic icon right floated buttons">
  <a href="/chap1/task/list" class="ui button"><i class="delete icon"></i></a>
  <button type="submit" class="ui button"><i class="save icon"></i></button>
</div>
  </form>

</div>


@endsection
