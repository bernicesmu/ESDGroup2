<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ClubExco extends Model
{
    use SoftDeletes;
    
    protected $table = 'club_exco';

    protected $fillable = [ 
        'id', 'clubMemberId', 'role', 'roleFromDate', 'roleToDate'
    ];
}
