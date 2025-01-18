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
        Schema::create('laporan', function (Blueprint $table) {
            $table->id('LaporanID'); // Primary Key
            $table->enum('TipeLaporan', ['Harian', 'Mingguan', 'Setengah Tahun']); 
            $table->date('TanggalAwal'); 
            $table->date('TanggalAkhir'); 
            $table->integer('TotalTransaksi'); 
            $table->decimal('TotalPendapatan', 10, 2); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('laporan');
    }
};
