<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('barang', function (Blueprint $table) {
            $table->id('BarangID');
            $table->string('NamaBarang', 100);  
            $table->integer('StokBarang');
            $table->decimal('HargaSatuan', 10, 2);
            $table->string('KategoriBarang', 50);
            $table->date('TanggalDatang');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('barang');
    }
};
