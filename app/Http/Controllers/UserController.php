<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function index()
    {
        $users = User::with('roles')->paginate(10);
        return Inertia::render('User/Index', ['users' => $users]);
    }

    public function create()
    {
        return Inertia::render('User/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:users|min:5',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:5',
            'role' => 'required',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        if ($user) {
            Role::create(['user_id' => $user->id, 'role' => $request->role]);
        }

        return redirect()->route('user.index')->with('success', 'Data Berhasil Disimpan');
    }

    public function edit(string $id)
    {
        $user = User::with('roles')->findOrFail($id);
        return Inertia::render('User/Edit', ['user' => $user]);
    }

    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|string|unique:users,name,'.$id,
            'email' => 'required|string|unique:users,email,'.$id,
            'role' => 'required',
        ]);

        $user = User::findOrFail($id);
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->filled('password') ? Hash::make($request->password) : $user->password,
        ]);

        $role = Role::updateOrCreate(['user_id' => $id], ['role' => $request->role]);

        return redirect()->route('user.index')->with('success', 'Data Berhasil Diperbarui');
    }

    public function destroy(string $id)
    {
        User::findOrFail($id)->delete();
        return redirect()->route('user.index')->with('success', 'Data Berhasil Dihapus');
    }
}
