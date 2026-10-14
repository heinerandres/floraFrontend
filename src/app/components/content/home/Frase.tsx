import { Heart, Leaf, Recycle } from "lucide-react"



export const Frase = () => {
    return (
        <div className="px-20 py-10">
            <div className="flex">
                <div className="flex-1 flex border-r border-gray-300 pr-10">
                    <img className="w-10 h-10" src="/imagenes/comillas.png"></img>
                    <div>
                        <p className="pl-2 pt-5 text-lg font-medium italic">Cada elección que hacemos hoy, siembra el mundo que queremos mañana.</p>
                        <p className="text-acento text-lg font-medium italic">— Floraphine</p>
                    </div>

                </div>
                <div className="flex-1 border-r border-gray-300 px-10">
                    <div className="flex">
                        <div className="flex-1 flex flex-col gap-2 items-center justify-center">
                            <Leaf size="30" className=""/>
                            <p className="text-center">Ingredientes naturales</p>
                        </div>
                        <div className="flex-1 flex flex-col gap-2 items-center justify-center">
                            <Heart size="30"/>
                            <p className="text-center">Pequeños lotes hechos a mano</p>
                        </div>
                        <div className="flex-1 flex flex-col gap-2 items-center justify-center">
                            <Recycle size="30"/>
                            <p className="text-center">Envases reciclables y reutilizables</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 px-10">
                    <h1 className="text-2xl font-medium">Únete a nuestra comunidad</h1>
                    <p>Recibe consejos, lanzamientos y promociones exclusivas.</p>
                    <div className="flex gap-5">
                        <input className="border border-gray-200 px-3 py-2 mt-3" type="text" placeholder="Tu correo electrónico"/>
                        <button className="bg-acento text-white px-5 mt-3 rounded-md cursor-pointer">SUSCRIBIRME</button>
                    </div>
                </div>
            </div>
        </div>
    )
}