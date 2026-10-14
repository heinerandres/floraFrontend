'use client';
import { crearProducto } from "@/services/api/server/productos";
import { ICategoria } from "@/types/categoria"
import { ImagePlus, Leaf, Lightbulb } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
    categorias: ICategoria[] | [];
}


export const ProductosAgregar = ({categorias}: Props) => {
    const router = useRouter();

    const [nombre, setNombre] = useState("");
    const [slug, setSlug] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [esDestacado, setDestacado] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [file1, setFile1] = useState<File | undefined>(undefined);
    const [img1, setImg1] = useState<string | undefined>(undefined);
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("nombre", nombre);
        formData.append("slug", slug);
        formData.append("categoria", categoria);
        formData.append("descripcion", descripcion);
        formData.append("esDestacado", String(esDestacado));
        if(file1) formData.append("img1", file1);


        const respuesta = await crearProducto(formData);
        if(respuesta.ok) router.replace("/admin/productos");
        else setErrorMsg(JSON.stringify(respuesta));
    }

    const generarSlug = (texto: string) => {
        return texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9\s-]/g, "")
            .trim()
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-");
    };

    const handleCancelar = () => {
        router.replace("/admin/productos")
    }

    const handleImage = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const file = e.target.files?.[0];
        if(!file) return;
        setFile1(e.target.files?.[0] || undefined);
        setImg1(URL.createObjectURL(file));
    }

    return(
        <form onSubmit={handleSubmit} className="px-20">
            {errorMsg && <p className="text-red-500">{ errorMsg }</p>}
            <div className="py-7 w-full border border-gray-300 rounded-lg shadow-lg">
                <div className="flex w-full">
                    <div className="w-[42%] px-13 border-r border-gray-300">
                        <div>
                            <p className="text-lg font-semibold">Imagen del producto *</p>
                        </div>
                        <p className="text-sm">Agrega una imagen que represente el producto.</p>
                        <label htmlFor="img1" 
                            className={`relative flex flex-col items-center justify-center rounded-lg h-90 mt-5 cursor-pointer overflow-hidden ${
                                !img1 ? "border border-dashed border-acento" : ""
                            }`}
                            >
                            {
                                !img1 && 
                                <>
                                    <ImagePlus size={55}/>
                                    <p>Arrastra tu imágen hasta aquí</p>
                                    <p>o haz click para seleccionar</p>
                                </>
                            }
                            {
                                img1 && <img className="h-full w-full" src={img1}/>
                            }
                            

                            <input
                                id="img1"
                                minLength={2}
                                required
                                className="absolute opacity-0 mb-5 mt-3 bg-blue-50 rounded file:border file:px-3 file:py-1 file:mr-8 file:bg-white file:cursor-pointer"
                                type="file" 
                                placeholder="Imagen"
                                name="img1"
                                accept="image/*"
                                onChange={(e) => handleImage(e)}
                            />

                        </label>
                        <div className="flex gap-5 mt-5 border border-gray-200 p-5 text-sm rounded-lg">
                            <Lightbulb size={24} className=""/>
                            
                            <div>
                                <p className="text-base font-semibold">Consejo</p>
                                <p>Usa imagenes con fondo claro y buena iluminación</p>
                                <p>para destacar tu producto.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-[58%] px-13">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nombre" className="text-sm font-semibold">Nombre del producto *</label>
                            <input
                                className="p-2 border border-gray-500 rounded-lg"
                                id="nombre"
                                name="nombre"
                                type="text"
                                placeholder="Ej. Sérum facial Calypso"
                                value={nombre}
                                onChange={(e) => {
                                    const valor = e.target.value;
                                    setSlug(generarSlug(valor));
                                    setNombre(valor)}
                                }
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="slug" className="text-sm font-semibold">Slug</label>
                            <input
                                className="p-2 border border-gray-500 rounded-lg"
                                id="slug"
                                name="slug"
                                type="text"
                                value={slug}
                                readOnly
                                placeholder="ej. serum-facial-calypso"
                            />
                            <p className="text-sm text-gray-600">Se genera automáticamente a partir del nombre.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="categoria" className="text-sm font-semibold">Categoría *</label>
                            <select
                                name="categoria"
                                id="categoria"
                                className="border rounded-md p-2"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                                required
                            >
                                <option value="">Seleccione una categoría</option>
                                {categorias.map((categoria) => (
                                    <option key={categoria._id} value={categoria._id}>
                                    {categoria.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="slug" className="text-sm font-semibold">Descripción *</label>
                            <textarea
                                className="p-2 border border-gray-500 rounded-lg h-25"
                                id="descripcion"
                                name="descripcion"
                                placeholder="ej. serum-facial-calypso"
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                required
                            />
                            <p className="text-sm text-gray-600">Max. 1000 caracteres</p>
                        </div>
                        <div className="flex justify-between">
                            <label className="flex gap-2 bg-acento/10 border border-gray-300 rounded-lg text-sm p-3 cursor-pointer">
                                <input
                                    className="mb-auto mt-1 scale-110"
                                    type="checkbox"
                                    id="destacado"
                                    name="destacado"
                                    checked={esDestacado}
                                    onChange={(e) => setDestacado(e.target.checked)}
                                />
                                
                                <div className="select-none">
                                    <p>Destacado</p>
                                    <p className="text-xs">Mostrar este producto en la homepage</p>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="pt-8 flex w-full">
                    <div className="w-2/5 px-13"></div>
                    <div className="flex flex-row justify-around w-3/5 px-13">
                        <button type="button" onClick={handleCancelar} className="border border-acento text-acento font-semibold px-10 py-2 rounded-md cursor-pointer">Cancelar</button>
                        <button type="submit"  className=" flex gap-2 border px-10 py-2 rounded-md bg-acento text-white cursor-pointer"><Leaf className="mt-1" size={18}/>Guardar Producto</button>
                    </div>

                </div>

            </div>
        </form>
    )
}