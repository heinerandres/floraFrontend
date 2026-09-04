'use client';
import { IAromas } from "@/types/aromas";
import { IBeneficios } from "@/types/beneficios";
import { IIngrediente } from "@/types/ingrediente";
import { IProducto } from "@/types/producto";
import { ITiposPiel } from "@/types/tiposPiel";
import { _base } from "@/utilities/url-imgBase";
import { ImagePlus, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";
import { crearVariante } from "@/services/api/server/variantes";

type Props = {
    producto: IProducto | null;
    aromas: IAromas[] | [];
    ingredientes: IIngrediente[] | [];
    beneficios: IBeneficios[] | [];
    tiposPiel: ITiposPiel[] | [];
}

export const VariantesAgregar = ({producto, aromas, ingredientes, beneficios, tiposPiel}: Props) => {
    const router = useRouter();

    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [presentacion, setPresentacion] = useState("");
    const [unidadMedida, setUNidadMedida] = useState("");
    const [file1, setFile1] = useState<File | undefined>(undefined);
    const [img1, setImg1] = useState<string | undefined>(undefined);
    const [errorMsg, setErrorMsg] = useState("");


    const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState<{ value: string; label: string }[]>([]);
    const [beneficiosSeleccionados, setBeneficiosSeleccionados] = useState<{ value: string; label: string }[]>([]);
    const [tiposPielSeleccionados, setTiposPielSeleccionados] = useState<{ value: string; label: string }[]>([]);
    const [aromasSeleccionados, setAromasSeleccionados] = useState<{ value: string; label: string }[]>([]);

    const handleCancelar = () => {
        router.replace(`/admin/productos/variantes/${producto?.slug}`)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const ingredientesIds = ingredientesSeleccionados.map((ingrediente) => ingrediente.value);
        const beneficiosIds = beneficiosSeleccionados.map((beneficio) => beneficio.value);
        const tiposPielIds = tiposPielSeleccionados.map((tipoPiel) => tipoPiel.value);
        const aromasIds = aromasSeleccionados.map((aroma) => aroma.value);
        
        const formData = new FormData();

        formData.append("producto", producto?._id!);
        formData.append("nombre", nombre);
        formData.append("precio", precio);
        formData.append("stock", cantidad);
        formData.append("presentacion", presentacion);
        formData.append("unidadMedida", unidadMedida);
        if(file1) formData.append("img1", file1);

        formData.append("ingredientes", JSON.stringify(ingredientesIds));
        formData.append("beneficios", JSON.stringify(beneficiosIds));
        formData.append("tiposPiel", JSON.stringify(tiposPielIds));
        formData.append("aromas", JSON.stringify(aromasIds));

        const respuesta = await crearVariante(formData);
        if(respuesta.ok) router.replace(`/admin/productos/variantes/${producto?.slug}`);
        else setErrorMsg(JSON.stringify(respuesta));
    }

    const handleImage = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const file = e.target.files?.[0];
        if(!file) return;
        setFile1(e.target.files?.[0] || undefined);
        setImg1(URL.createObjectURL(file));
    }

    return (
        <div className=" flex gap-8 px-20">
            <div className="flex-1 px-10 py-5 border border-gray-200 shadow-lg rounded-lg">
                <h2 className="font-semibold text-lg pb-5">Información del Producto</h2>
                <h2 className="pb-1 text-sm font-semibold">Categoría</h2>
                <p className="border border-acento/20 w-fit px-2 py-1 rounded-md text-green-700 font-medium bg-acento/20 text-sm">{producto?.categoria.nombre}</p>
                <h2 className="pt-5 text-sm font-semibold">Nombre del producto</h2>
                <p className="font-semibold pt-1">{producto?.nombre}</p>
                <h2 className="pt-5 text-sm font-semibold">Descripción</h2>
                <p className="pt-1">{producto?.descripcion}</p>
                <div className="flex items-center justify-center w-full">
                    <img src={ _base + producto?.imagenes[0].url} className="h-60 w-60 mt-20 rounded-lg" />
                </div>
                
            </div>
            <form onSubmit={handleSubmit} className="w-2/3 px-10 py-5 border border-gray-200 shadow-lg rounded-lg">
                <h2 className="font-semibold text-lg pb-2">Información de la Variante</h2>
                {errorMsg && <p className="text-red-500">{ errorMsg }</p>}
                <div className="flex gap-10 border-b border-gray-300">
                    <div className="flex-1">
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="nombre" className="text-sm font-semibold">Nombre de la variante*</label>
                            <input
                                className="p-2 border border-gray-500 rounded-lg"
                                id="nombre"
                                name="nombre"
                                type="text"
                                placeholder="Ej. Sérum facial Calypso"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="cantidad" className="text-sm font-semibold">Cantidad disponible*</label>
                            <input
                                className="p-2 border border-gray-500 rounded-lg"
                                id="cantidad"
                                name="cantidad"
                                type="number"
                                placeholder="Ej. 20"
                                value={cantidad}
                                onChange={(e) => setCantidad(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="presentacion" className="text-sm font-semibold">Presentación*</label>
                            <input
                                className="p-2 border border-gray-500 rounded-lg"
                                id="presentacion"
                                name="presentacion"
                                type="number"
                                placeholder="Ej. 250"
                                value={presentacion}
                                onChange={(e) => setPresentacion(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="unidadMedida" className="text-sm font-semibold">Unidad de Medida*</label>
                            <input
                                className="p-2 border border-gray-500 rounded-lg mb-5"
                                id="unidadMedida"
                                name="unidadMedida"
                                type="text"
                                placeholder="Ej. mg"
                                value={unidadMedida}
                                onChange={(e) => setUNidadMedida(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col gap-2 mb-2">
                            <label htmlFor="precio" className="text-sm font-semibold">Precio*</label>
                            <input
                                className="p-2 border border-gray-500 rounded-lg"
                                id="precio"
                                name="precio"
                                type="number"
                                placeholder="Ej. 1200"
                                value={precio}
                                onChange={(e) => setPrecio(e.target.value)}
                                required
                            />
                        </div>
                        <h2 className="text-sm font-semibold">Imágen de la variante</h2>
                        <div className="flex justify-center mt-5 h-40">
                            <label htmlFor="img1" className="relative flex justify-center items-center border border-dashed border-acento w-40 h-45 cursor-pointer">
                                {
                                    !img1 && 
                                    <div className="flex flex-col justify-center items-center">
                                        <ImagePlus size={28}/>
                                        <p className="text-xs mt-2">Agregar Imágen</p>
                                    </div>
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

                        </div>
                    </div>
                </div>
                <div className="flex gap-10 mt-5">
                    <div className="flex flex-col gap-5 flex-1">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="ingredientes" className="text-sm font-semibold">Ingredientes*</label>
                            <Select instanceId="ingredientes" name="ingredientes" className="cursor-pointer" 
                                isMulti
                                required
                                options={ingredientes
                                    .filter((ingrediente) => ingrediente._id)
                                    .map((ingrediente) => ({
                                    value: ingrediente._id!,
                                    label: ingrediente.nombre,
                                }))}
                                value={ingredientesSeleccionados}
                                onChange={(opciones) => setIngredientesSeleccionados([...opciones])}
                                styles={{
                                    control: (base, state) => ({
                                    ...base,
                                    borderColor: state.isFocused ? "#4FA7A1" : "#4FA7A1",
                                    borderRadius: "8px",
                                    boxShadow: "none",
                                    "&:hover": {
                                        borderColor: state.isFocused ? "#4FA7A1" : "#4FA7A1",
                                    },
                                    }),

                                    multiValue: (base) => ({
                                    ...base,
                                    backgroundColor: "#4FA7A133",
                                    }),

                                    multiValueLabel: (base) => ({
                                    ...base,
                                    color: "#000000",
                                    }),

                                    multiValueRemove: (base) => ({
                                    ...base,
                                    color: "#4FA7A1",
                                    "&:hover": {
                                        backgroundColor: "#4FA7A1",
                                        color: "#FFFFFF",
                                    },
                                    }),
                                }}>
                                
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="beneficios" className="text-sm font-semibold">Beneficios*</label>
                            <Select instanceId="beneficios" name="beneficios" className="cursor-pointer"
                                isMulti
                                required
                                value={beneficiosSeleccionados}
                                onChange={(opciones) => setBeneficiosSeleccionados([...opciones])}
                                options={beneficios
                                    .filter((beneficio) => beneficio._id)
                                    .map((beneficio) => ({
                                    value: beneficio._id!,
                                    label: beneficio.nombre,
                                }))}
                                styles={{
                                    control: (base, state) => ({
                                    ...base,
                                    borderColor: state.isFocused ? "#4FA7A1" : "#4FA7A1",
                                    borderRadius: "8px",
                                    boxShadow: "none",
                                    "&:hover": {
                                        borderColor: state.isFocused ? "#4FA7A1" : "#4FA7A1",
                                    },
                                    }),

                                    multiValue: (base) => ({
                                    ...base,
                                    backgroundColor: "#4FA7A133",
                                    }),

                                    multiValueLabel: (base) => ({
                                    ...base,
                                    color: "#000000",
                                    }),

                                    multiValueRemove: (base) => ({
                                    ...base,
                                    color: "#4FA7A1",
                                    "&:hover": {
                                        backgroundColor: "#4FA7A1",
                                        color: "#FFFFFF",
                                    },
                                    }),
                                }}>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 flex-1">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="tiposPiel" className="text-sm font-semibold">Tipos de Piel*</label>
                            <Select instanceId="tiposPiel" name="tiposPiel" className="cursor-pointer"
                                isMulti
                                required
                                value={tiposPielSeleccionados}
                                onChange={(opciones) => setTiposPielSeleccionados([...opciones])}
                                options={tiposPiel
                                    .filter((tipoPiel) => tipoPiel._id)
                                    .map((tipoPiel) => ({
                                    value: tipoPiel._id!,
                                    label: tipoPiel.nombre,
                                }))}
                                styles={{
                                    control: (base, state) => ({
                                    ...base,
                                    borderColor: state.isFocused ? "#4FA7A1" : "#4FA7A1",
                                    borderRadius: "8px",
                                    boxShadow: "none",
                                    "&:hover": {
                                        borderColor: state.isFocused ? "#4FA7A1" : "#4FA7A1",
                                    },
                                    }),

                                    multiValue: (base) => ({
                                    ...base,
                                    backgroundColor: "#4FA7A133",
                                    }),

                                    multiValueLabel: (base) => ({
                                    ...base,
                                    color: "#000000",
                                    }),

                                    multiValueRemove: (base) => ({
                                    ...base,
                                    color: "#4FA7A1",
                                    "&:hover": {
                                        backgroundColor: "#4FA7A1",
                                        color: "#FFFFFF",
                                    },
                                    }),
                                }}>
                                
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="aromas" className="text-sm font-semibold">Aromas*</label>
                            <Select instanceId="aromas"  name="aromas" className="cursor-pointer"
                                isMulti
                                required
                                value={aromasSeleccionados}
                                onChange={(opciones) => setAromasSeleccionados([...opciones])}
                                options={aromas
                                    .filter((aroma) => aroma._id)
                                    .map((aroma) => ({
                                    value: aroma._id!,
                                    label: aroma.nombre,
                                }))}
                                styles={{
                                    control: (base, state) => ({
                                    ...base,
                                    borderColor: state.isFocused ? "#4FA7A1" : "#4FA7A1",
                                    borderRadius: "8px",
                                    boxShadow: "none",
                                    "&:hover": {
                                        borderColor: state.isFocused ? "#4FA7A1" : "#4FA7A1",
                                    },
                                    }),

                                    multiValue: (base) => ({
                                    ...base,
                                    backgroundColor: "#4FA7A133",
                                    }),

                                    multiValueLabel: (base) => ({
                                    ...base,
                                    color: "#000000",
                                    }),

                                    multiValueRemove: (base) => ({
                                    ...base,
                                    color: "#4FA7A1",
                                    "&:hover": {
                                        backgroundColor: "#4FA7A1",
                                        color: "#FFFFFF",
                                    },
                                    }),
                                }}>
                                
                            </Select>
                        </div>
                        
                    </div>

                </div>
                <div className="pt-8 pb-5 flex justify-around w-full">
                    <button type="button" onClick={handleCancelar} className="border border-acento text-acento font-semibold px-10 py-2 rounded-md cursor-pointer">Cancelar</button>
                    <button type="submit"  className=" flex gap-2 border px-10 py-2 rounded-md bg-acento text-white cursor-pointer"><Save className="mt-1" size={18}/>Guardar Variante</button>
                </div>
            </form>
        </div>
    )
}