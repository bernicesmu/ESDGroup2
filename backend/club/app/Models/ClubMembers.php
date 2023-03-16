<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ClubMembers extends Model
{
    use SoftDeletes;

    protected $table = 'club_members';

    protected $fillable = [ 
        'id', 'clubId', 'studentMatricNum', 'yearJoined'
    ];
}
?>