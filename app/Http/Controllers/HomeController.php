<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravel\Fortify\Features;

class HomeController extends Controller
{
    public function projects(   ) {
        $projects = Project::all();
        // dd($projects);
        $skills = Skill::all();
        return Inertia::render('Home',[
            'projects' => $projects,
            'skills' => $skills,
            'canRegister' => Features::enabled(Features::registration())
        ]);
    }
}
