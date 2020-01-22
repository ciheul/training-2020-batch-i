@extends('layouts.app')
@section('content')
<div class="container">
  <div class="container">
    <div class="ui stackable one column grid">
      <div class="column">
        <h3 class="ui block header">Task List</h3>
        <form action="{{ route('chap1.task.post') }}" method="POST">
          {{ csrf_field() }}

          <div class="form-row">
          <div class="card-body">
            <div class="form-group">
              <label for="task-title">Title:</label>
              <input type="text" class="form-control" placeholder="Title" name="title" id="task-title">
            </div>
            <div class="form-group">
              <label for="task-body">Body:</label>
              <textarea class="form-control" id="task-body" name="body" rows="3"></textarea>
            </div>
            <div class="ui buttons right floated">
              <a href="/chap1/task/list" class=" ui negative button">Cancel</a>
              <div class="or"></div>
              <button  class="ui positive button">Save</button>
            </div>
          </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
@endsection
