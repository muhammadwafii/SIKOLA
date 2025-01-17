<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Illuminate\Http\Request;

class BarangController extends Controller
{
    public function index()
    {
        $barang = Barang::all();
        return view('barang.index', compact('barang'));
    }

    public function create()
    {
        return view('barang.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'NamaBarang' => 'required|string|max:100',
            'StokBarang' => 'required|integer',
            'HargaSatuan' => 'required|numeric',
            'KategoriBarang' => 'required|string|max:50',
            'TanggalDatang' => 'required|date',
        ]);

        Barang::create($request->all());

        return redirect()->route('barang.index')->with('success', 'Barang berhasil ditambahkan.');
    }

    public function show(Barang $barang)
    {
        return view('barang.show', compact('barang'));
    }

    public function edit(Barang $barang)
    {
        return view('barang.edit', compact('barang'));
    }

    public function update(Request $request, Barang $barang)
    {
        $request->validate([
            'NamaBarang' => 'required|string|max:100',
            'StokBarang' => 'required|integer',
            'HargaSatuan' => 'required|numeric',
            'KategoriBarang' => 'required|string|max:50',
            'TanggalDatang' => 'required|date',
        ]);

        $barang->update($request->all());

        return redirect()->route('barang.index')->with('success', 'Barang berhasil diperbarui.');
    }

    public function destroy(Barang $barang)
    {
        $barang->delete();
        return redirect()->route('barang.index')->with('success', 'Barang berhasil dihapus.');
    }
}
