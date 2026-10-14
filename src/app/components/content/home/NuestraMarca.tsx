import { Clover, Leaf, Rabbit, Sprout } from "lucide-react"
import Link from "next/link"




export const NuestraMarca = () => {
    

    return (
        <div className="px-20 py-10 bg-primary bg-[url('/imagenes/nuestra-marca.png')] bg-size-[39%_auto] bg-right bg-no-repeat">
            <div className="flex h-100">
                <div className="flex-1 border-r border-gray-600">
                    <h1 className="text-4xl font-medium text-white">Sobre nuestra marca</h1>
                    <div className="w-17 border border-white mt-4"></div>
                    <p className="text-md leading-loose text-white mt-10 mb-10 pr-20">Floraphine nace del amor por la naturaleza y del deseo de ofrecer cosmética consciente que respeta tu cuerpo y el planeta. Inspiradas en la herbolaria y en ingredientes naturales de alta calidad, formulamos cada producto en pequeños lotes con intención, cuidado y honestidad</p>
                    <Link href="" className="text-white px-7 py-4 border rounded-sm">CONOCE NUESTRA HISTORIA</Link>
                </div>
                <div className="flex-1 px-20 ">
                    <h1 className="text-4xl font-medium text-white">Nuestra filosofía</h1>
                    <div className="w-17 border border-white mt-4 mb-10"></div>
                    
                    <div className="flex">
                        <div className="flex text-white">
                            <Rabbit size="80" strokeWidth={1} className=""/>
                            <div className="px-4">
                                <h4 className="font-semibold">Respeto</h4>
                                <p>Respetamos tu piel, a los animales y al meido ambiente.</p>
                            </div>
                        </div>
                        <div className="flex text-white">
                            <Leaf size="80" strokeWidth={1} className=""/>
                            <div className="px-4">
                                <h4 className="font-semibold">Transparencia</h4>
                                <p>Ingredientes naturales, sin tóxicos ni secretos.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex mt-10">
                        <div className="flex text-white">
                            <Sprout size="80" strokeWidth={1} className=""/>
                            <div className="px-4">
                                <h4 className="font-semibold">Bienestar</h4>
                                <p>Creados para tu bienestar físico, mental y emocional.</p>
                            </div>
                        </div>
                        <div className="flex text-white">
                            <Clover size="80" strokeWidth={1} className=""/>
                            <div className="px-4">
                                <h4 className="font-semibold">Consciencia</h4>
                                <p>Elegimos lo mejor de la naturaleza para cuidar tu piel.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex-1">

                </div>

            </div>

        </div>
    )
}