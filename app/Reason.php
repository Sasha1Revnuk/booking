<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Reason extends Model
{
    protected $guarded = [];
    protected $table="reasons";
}
