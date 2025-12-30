<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::all();
        return Inertia::render(
            'Admin/Projects/Index',
            compact('projects')
        );
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
            'thumbnail' => 'required|mimes:jpg,png,jpeg,gif,svg|max:2048',
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

    public function edit(Project $project)
    {

        return Inertia::render('Admin/Projects/Edit', [
            'project' => $project
        ]);
    }

    public function update(Project $project, Request $request)
    {
        $validated = $request->validate([
            'title' => 'nullable|string|max:255',
            'slug' => 'nullable|string|max:255|unique:projects,slug,' . $project->id,
            'description' => 'nullable|string',
            'role' => 'nullable|string',
            'tech_stack' => 'nullable|array',
            'thumbnail' => 'nullable|image|mimes:jpg,png,jpeg,gif,svg|max:2048',
            'demo_url' => 'nullable|url',
            'repo_url' => 'nullable|url',
            'type' => 'nullable|string',
            'is_featured' => 'nullable|boolean',
        ]);

        $validated['is_featured'] = $request->boolean('is_featured');
        unset($validated['thumbnail']);
        if ($request->hasFile('thumbnail')) {
            if ($project->thumbnail && Storage::disk('public')->exists($project->thumbnail)) {
                Storage::disk('public')->delete($project->thumbnail);
            }
            $validated['thumbnail'] = $request->file('thumbnail')->store('thumbnail-images', 'public');
        }
        // $validated['title'] = $request->string('title');
        $project->update($validated);
        // dd($request->method(), $request->all());
        return redirect()->route('projects.index')->with('message', 'Project Updated Successfully');
    }


    public function destroy(Project $project)
    {
        if ($project->thumbnail) {
            Storage::disk('public')->delete($project->thumbnail);
        }
        $project->delete();
        return redirect()->route('projects.index')->with('message', 'Project Deleted Successfully');
    }
}
