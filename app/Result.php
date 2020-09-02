<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Result extends Model
{
    protected $guarded = [];

    public function people()
    {
        return $this->belongsTo(People::class, 'people_id');
    }


}
