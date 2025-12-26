<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SkillImage extends Model
{
    protected $fillable = [
        'skiill_id',
        'image'
    ];

    public function skill() {
        return $this->belongsTo(Skill::class);
    }
}
