<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function projects(   ) {
        $projects = Project::all();
        // dd($projects);
        return Inertia::render('Home',[compact('projects')]);
    }
}
