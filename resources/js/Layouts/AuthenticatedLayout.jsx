import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { Home, Menu, Users } from "lucide-react";

export default function Sidebar({ children }) {
    const user = usePage().props.auth.user;
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menuItems = [
        { name: "Dashboard", href: route("dashboard"), icon: <Home size={20} /> },
        { name: "Users", href: route("users.index"), icon: <Users size={20} /> },
    ];

    return (
        <div className="flex">
            <div className={`h-screen bg-white border-r transition-all ${isCollapsed ? "w-16" : "w-64"}`}>
                <div className="flex items-center justify-between p-2 border-b">
                    <Link href="/">
                        <img src="https://i.ibb.co.com/M9qz1TJ/Logo-Sikola-1-removebg-preview.png" alt="logo" className="h-11 w-auto" />
                    </Link>
                    <button onClick={() => setIsCollapsed(!isCollapsed)}>
                        <Menu size={24} />
                    </button>
                </div>
                <nav className="mt-4 space-y-2">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg mx-2"
                        >
                            {item.icon}
                            {!isCollapsed && <span>{item.name}</span>}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="flex-1 p-6">{children}</div>
        </div>
    );
}