import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';

export default function Dashboard() {
    const { users, flash } = usePage().props;

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            <div className="py-2">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {flash.success && (
                                <div className="mb-4 text-green-600 bg-green-100 p-4 rounded">
                                    <strong>{flash.success}</strong>
                                </div>
                            )}

                            <Link href={route('user.create')} className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">
                                <i className="fa fa-plus"></i> Tambah User
                            </Link>

                            <div className="mt-4 overflow-x-auto">
                                <table className="w-full table-auto border-collapse border border-gray-300">
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="px-4 py-2 border">No.</th>
                                            <th className="px-4 py-2 border">Username</th>
                                            <th className="px-4 py-2 border">Nama</th>
                                            <th className="px-4 py-2 border">Email</th>
                                            <th className="px-4 py-2 border">Level</th>
                                            <th className="px-4 py-2 border">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.data.map((user, index) => (
                                            <tr key={user.id} className="text-center">
                                                <td className="px-4 py-2 border">{index + 1}</td>
                                                <td className="px-4 py-2 border">{user.name}</td>
                                                <td className="px-4 py-2 border">{user.nama_lengkap}</td>
                                                <td className="px-4 py-2 border">{user.email}</td>
                                                <td className="px-4 py-2 border">{user.roles.length > 0 ? user.roles[0].name : '-'}</td>
                                                <td className="px-4 py-2 border flex justify-center gap-2">
                                                    <Link href={route('user.edit', user.id)} className="px-2 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600">
                                                        <i className="fa fa-edit"></i> Edit
                                                    </Link>
                                                    <form
                                                        method="POST"
                                                        onSubmit={(e) => {
                                                            e.preventDefault();
                                                            if (confirm('Apakah Anda yakin ingin menghapus pengguna ini?')) {
                                                                Inertia.delete(route('user.destroy', user.id));
                                                            }
                                                        }}
                                                    >
                                                        <button type="submit" className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600">
                                                            <i className="fa fa-trash"></i> Hapus
                                                        </button>
                                                    </form>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination */}
                            <div className="mt-4">{users.links}</div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}