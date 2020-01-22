<?php

namespace App\Model\Chap1;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'title', 'body'
    ];
}
