"use client";

import Link from "next/link";
import {
    Leaf,
    Tag,
    TestTubeDiagonal,
    Heart,
    HeartHandshake,
    FlaskConical,
    ClipboardList,
    Menu,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const pathname = usePathname();

    return (
        <div className="relative">
            <button
                className="absolute top-7 -right-25 mx-10 cursor-pointer"
                onClick={() => setSidebarOpen((prev) => !prev)}
            >
                <Menu size={24} />
            </button>

            <aside
                className={`h-full bg-primary text-white overflow-hidden transition-all duration-300 ${
                    sidebarOpen ? "w-75" : "w-0"
                }`}
            >
                <div className="relative flex flex-col px-7 h-full">
                    <Link href="/">
                        <img
                            src="/imagenes/logo.png"
                            className="px-3 pt-5"
                        />
                    </Link>
                    <p className="text-sm text-gray-400 px-1 pt-10">
                        MENÚ PRINCIPAL
                    </p>
                    <Link
                        href="/admin/productos"
                        className={`flex gap-3 p-2 px-5 rounded-sm mt-2 ${
                            pathname.includes("/admin/productos")
                                ? "bg-acento"
                                : "hover:bg-secundary/10"
                        }`}
                    >
                        <Leaf size={20} strokeWidth={1.5} />
                        Productos
                    </Link>
                    <Link
                        href="/admin/categorias"
                        className={`flex gap-3 p-2 px-5 rounded-sm ${
                            pathname === "/admin/categorias"
                                ? "bg-acento"
                                : "hover:bg-secundary/10"
                        }`}
                    >
                        <Tag size={20} strokeWidth={1.5} />
                        Categorías
                    </Link>
                    <Link
                        href="/admin/ingredientes"
                        className={`flex gap-3 p-2 px-5 rounded-sm ${
                            pathname === "/admin/ingredientes"
                                ? "bg-acento"
                                : "hover:bg-secundary/10"
                        }`}
                    >
                        <TestTubeDiagonal size={20} strokeWidth={1.5} />
                        Ingredientes
                    </Link>
                    <Link
                        href="/admin/beneficios"
                        className={`flex gap-3 p-2 px-5 rounded-sm ${
                            pathname === "/admin/beneficios"
                                ? "bg-acento"
                                : "hover:bg-secundary/10"
                        }`}
                    >
                        <Heart size={20} strokeWidth={1.5} />
                        Beneficios
                    </Link>
                    <Link
                        href="/admin/tiposPiel"
                        className={`flex gap-3 p-2 px-5 rounded-sm z-10 ${
                            pathname === "/admin/tiposPiel"
                                ? "bg-acento"
                                : "hover:bg-secundary/10"
                        }`}
                    >
                        <HeartHandshake size={20} strokeWidth={1.5} />
                        Tipos de Piel
                    </Link>
                    <Link
                        href="/admin/aromas"
                        className={`flex gap-3 p-2 px-5 rounded-sm z-10 ${
                            pathname === "/admin/aromas"
                                ? "bg-acento"
                                : "hover:bg-secundary/10"
                        }`}
                    >
                        <FlaskConical size={20} strokeWidth={1.5} />
                        Aromas
                    </Link>
                    <Link
                        href="#"
                        className="flex gap-3 p-2 px-5 rounded-sm hover:bg-secundary/10 z-10"
                    >
                        <ClipboardList size={20} strokeWidth={1.5} />
                        Pedidos
                    </Link>
                    <div className="border h-40 mt-auto mb-10 rounded-lg p-5 bg-acento/15 text-base">
                        <div className="flex items-center justify-center h-[40%]">
                            <img
                                src="/imagenes/logo-image2.png"
                                className="h-full"
                            />
                        </div>
                        <p className="mt-4">Belleza consciente,</p>
                        <p>
                            Nacida de la{" "}
                            <span className="text-acento">naturaleza</span>.
                        </p>
                    </div>
                    <div className="absolute bottom-45 z-0">
                        <img
                            src="/imagenes/rama-aside.png"
                            className="w-[80%] ml-auto"
                        />
                    </div>
                </div>
            </aside>
        </div>
    );
};