<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SkillController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Skills/Index');
    }
    public function create()
    {
        return Inertia::render('Admin/Skills/Create');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'category' => 'required|in:backend,frontend,design,video',
            'level' => 'required|in:Beginner,Intermediate,Advanced',
            'icon' => 'required|image|mimes:png,jpg,svg,gif|max:2048'
        ]);

        $iconPath = $request->file('icon')->store('skill-icons', 'public');

        Skill::create([
            ...$validated,
            'icon' => $iconPath
        ]);

        return redirect()->route('skills.index')->with('message', 'Skill Created Successfully');
    }
    public function edit(Skill $skill)
    {
        return Inertia::render('Admin/Skills/Edit', [
            'skill' => $skill
        ]);
    }
    public function update(Request $request, Skill $skill)
    {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'category' => 'required',
            'level' => 'required',
            'icon' => 'nullable|image|mimes:png,jpg,svg,gif|max:2048'
        ]);

        if ($request->hasFile('icon')) {
            if ($skill->icon && Storage::disk('public')->exists($skill->icon)) {
                Storage::disk('public')->delete($skill->icon);
            }
            $validated['icon'] = $request->file('icon')->store('skill-icons', 'public');
        }

        $skill->update($validated);
        return redirect()->route('skills.index')->with('message', 'Skill Updated Successfully');
    }
    public function destroy(Skill $skill)
    {
        if ($skill->icon && Storage::disk('public')->exists($skill->icon)) {
            Storage::disk('public')->delete($skill->icon);
        }
        $skill->delete();
        return redirect()->route('skills.index')->with('message', 'Skill Deleted Successfully');
    }
}
