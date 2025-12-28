<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Projects/Index', []);
    }
    public function create()
    {
        return Inertia::render('Admin/Projects/Create', []);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:projects,slug',
            'description' => 'required|string',
            'role' => 'nullable|string',
            'tech_stack' => 'nullable|array',
            'thumbnail' => 'required|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
            'demo_url' => 'nullable|url',
            'repo_url' => 'nullable|url',
            'type' => 'required|string',
            'is_featured' => 'required|boolean',
        ]);

        //! store image
        $thumbnailPath = $request->file('thumbnail')
            ->store('thumbnail-images', 'public');

        //! save project
        Project::create([
            ...$validated,
            'thumbnail' => $thumbnailPath,
        ]);

        return redirect()
            ->route('projects.index')
            ->with('message', 'Project created successfully');
    }

    public function edit (Project $project ,Request $request) {
        $validated = $request->validate([

        ]);
    }
}
