<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class People extends Model
{
    protected $guarded = [];
    protected $table = 'people';

    public function results()
    {
        return $this->hasMany(Result::class);
    }


}
