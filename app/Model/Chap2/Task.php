<?php

namespace App\Model\Chap2;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'title','body', 'status'
    ];
}
