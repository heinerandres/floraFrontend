import { Droplet, FlaskConical, Leaf, Pipette } from "lucide-react"


export const CategoriasHome = () => {
    return (
        <div className="py-10 px-20">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-medium py-2">Explora nuestras categorías</h1>
                <div className="w-10 border-acento border"></div>
                
                <div className="flex justify-center w-full p-5">
                    <div className="flex justify-around gap-10 w-[50%]">
                        <div className="flex flex-col items-center">
                            <div className="rounded-full bg-gray-50 p-8">
                                <Droplet />
                            </div>
                            <p>Cuidado facial</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="rounded-full bg-gray-50 p-8">
                                <Pipette />
                            </div>
                            <p>Cuidado capilar</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="rounded-full bg-gray-50 p-8">
                                <FlaskConical />
                            </div>
                            <p>Cuidado corporal</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="rounded-full bg-gray-50 p-8">
                                <Leaf />
                            </div>
                            <p>Cuidado labial</p>
                        </div>
                    </div>
                </div>
                <p className="text-acento border border-acento font-medium px-5 py-1 mt-3 cursor-pointer rounded-sm">VER TODAS LAS CATEGORÍAS</p>
            </div>
            <div className="py-5 px-10">
                <h1 className="text-2xl font-medium py-2">Productos destacados</h1>
                <div className="w-10 border border-acento"></div>
                <div className="flex gap-10 py-3">
                    <div className="h-70 w-60 border border-gray-400 rounded-sm overflow-hidden">
                        <div className="h-[55%]">
                            <img className="w-full h-full" src="/imagenes/destacado1.png"/>
                        </div>
                        <div className="flex flex-col items-center p-3">
                            <p className="text-lg font-semibold mt-2 mb-2">Nieve de Hada</p>
                            <p>Crema facial hidratante</p>
                            <p className="font-semibold mt-2">$120</p>
                        </div>
                    </div>
                    <div className="h-70 w-60 border border-gray-400 rounded-sm overflow-hidden">
                        <div className="h-[55%]">
                            <img className="w-full h-full" src="/imagenes/destacado2.png"/>
                        </div>
                        <div className="flex flex-col items-center p-3">
                            <p className="text-lg font-semibold mt-2 mb-2">Nieve de Hada</p>
                            <p>Crema facial hidratante</p>
                            <p className="font-semibold mt-2">$120</p>
                        </div>
                    </div>
                    <div className="h-70 w-60 border border-gray-400 rounded-sm overflow-hidden">
                        <div className="h-[55%]">
                            <img className="w-full h-full" src="/imagenes/destacado3.png"/>
                        </div>
                        <div className="flex flex-col items-center p-3">
                            <p className="text-lg font-semibold mt-2 mb-2">Nieve de Hada</p>
                            <p>Crema facial hidratante</p>
                            <p className="font-semibold mt-2">$120</p>
                        </div>
                    </div>
                    <div className="h-70 w-60 border border-gray-400 rounded-sm overflow-hidden">
                        <div className="h-[55%]">
                            <img className="w-full h-full" src="/imagenes/destacado4.png"/>
                        </div>
                        <div className="flex flex-col items-center p-3">
                            <p className="text-lg font-semibold mt-2 mb-2">Nieve de Hada</p>
                            <p>Crema facial hidratante</p>
                            <p className="font-semibold mt-2">$120</p>
                        </div>
                    </div>
                    <div className="h-70 w-60 border border-gray-400 rounded-sm overflow-hidden">
                        <div className="h-[55%]">
                            <img className="w-full h-full" src="/imagenes/destacado3.png"/>
                        </div>
                        <div className="flex flex-col items-center p-3">
                            <p className="text-lg font-semibold mt-2 mb-2">Nieve de Hada</p>
                            <p>Crema facial hidratante</p>
                            <p className="font-semibold mt-2">$120</p>
                        </div>
                    </div>
                    <div className="h-70 w-60 border border-gray-400 rounded-sm overflow-hidden">
                        <div className="h-[55%]">
                            <img className="w-full h-full" src="/imagenes/destacado3.png"/>
                        </div>
                        <div className="flex flex-col items-center p-3">
                            <p className="text-lg font-semibold mt-2 mb-2">Nieve de Hada</p>
                            <p>Crema facial hidratante</p>
                            <p className="font-semibold mt-2">$120</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className="w-fit text-acento border border-acento font-medium px-5 py-1 mt-3 cursor-pointer rounded-sm">VER TODOS LOS PRODUCTOS</p>
                </div>
                
            </div>
            
        </div>
    )
}