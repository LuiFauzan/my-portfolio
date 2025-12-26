<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title','slug','description','role','tech_stack','thumbnail','demo_url','repo_url','type','is_featured'
    ];

    protected $casts = ['tech_stack' => 'array','is_featured' => 'boolean'];

    public function images() {
        return $this->hasMany(ProjectImage::class);
    }
}
