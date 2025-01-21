<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Leveldata extends Model
{
    protected $fillable = [
        'user_id',
        'user_level',
    ];

    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }

}
