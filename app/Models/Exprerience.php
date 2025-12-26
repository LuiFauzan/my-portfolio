<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Exprerience extends Model
{
   protected $fillable = [
    'title','company','type','start_date','end_date','description'
   ];
}
