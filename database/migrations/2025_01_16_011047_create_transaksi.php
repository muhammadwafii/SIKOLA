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
        Schema::create('transaksi', function (Blueprint $table) {
            $table->id('TransaksiID');
            $table->unsignedBigInteger('UserID');
            $table->enum('MetodePembayaran', ['Tunai', 'Non-Tunai']);
            $table->date('TanggalTransaksi');
            $table->decimal('TotalHarga', 10, 2);
            $table->timestamps();

            $table->foreign('UserID')->references('id')->on('users')->onDelete('cascade'); //foreign key
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaksi');
    }
};
