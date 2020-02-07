<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class chapter2 extends Model
{
    protected $fillable = [
        'title', 'body', 'status'
    ];
}
