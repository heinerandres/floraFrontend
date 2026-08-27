import Link from "next/link"

export const Navbar = async () => {
    return (
        <nav className="flex items-center bg-primary h-35 px-15 text-white">
            <img className="h-[75%] mt-[-0.5%]" src="/imagenes/logo.png"></img>
            <div className="flex gap-20 ml-60">
                <Link href="/admin/productos" className="">ADMINISTRACIÓN</Link>
                <Link href="#" className="">INICIO</Link>
                <Link href="#">NOSOTRAS</Link>
                <Link href="#">CATEGORIAS</Link>
                <Link href="#">TIPS</Link>
                <Link href="#">TIENDA</Link>
                <Link href="#">CONTACTO</Link>
            </div>
        </nav>
    )
}