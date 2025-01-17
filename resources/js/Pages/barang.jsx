import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ items }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Barang
                </h2>
            }
        >
            <Head title="Barang" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="mb-4 text-lg font-semibold">Data Barang</h3>
                            <table className="w-full table-auto border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-2">BarangID</th>
                                        <th className="border border-gray-300 px-4 py-2">Nama Barang</th>
                                        <th className="border border-gray-300 px-4 py-2">Stok Barang</th>
                                        <th className="border border-gray-300 px-4 py-2">Harga Satuan</th>
                                        <th className="border border-gray-300 px-4 py-2">Kategori Barang</th>
                                        <th className="border border-gray-300 px-4 py-2">Tanggal Datang</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item) => (
                                        <tr key={item.BarangID} className="text-center">
                                            <td className="border border-gray-300 px-4 py-2">{item.BarangID}</td>
                                            <td className="border border-gray-300 px-4 py-2">{item.NamaBarang}</td>
                                            <td className="border border-gray-300 px-4 py-2">{item.StokBarang}</td>
                                            <td className="border border-gray-300 px-4 py-2">{item.HargaSatuan}</td>
                                            <td className="border border-gray-300 px-4 py-2">{item.KategoriBarang}</td>
                                            <td className="border border-gray-300 px-4 py-2">{item.TanggalDatang}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
