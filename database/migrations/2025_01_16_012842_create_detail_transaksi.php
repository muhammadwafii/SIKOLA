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
        Schema::create('detail_transaksi', function (Blueprint $table) {
            $table->id('DetailTransaksiID');
            $table->unsignedBigInteger('TransaksiID');
            $table->unsignedBigInteger('BarangID');
            $table->integer('JumlahBarang');
            $table->decimal('SubTotal', 10, 2);
            $table->timestamps();

            // Foreign key ke tabel transaksi
            $table->foreign('TransaksiID')->references('TransaksiID')->on('transaksi')->onDelete('cascade');
            // Foreign key ke tabel barang
            $table->foreign('BarangID')->references('id')->on('barang')->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detail_transaksi');
    }
};
