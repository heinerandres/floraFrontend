import { Earth, FlaskConical, Leaf, Rabbit } from "lucide-react";

export const Hero = () => {
    

    return (
        <div className="h-130 px-15 py-10 bg-primary bg-[url('/imagenes/fondo-hero-section.png')] bg-size-[75%_auto] bg-right bg-no-repeat">
            <div className="h-full">
                <h1 className="text-4xl text-white font-medium">Belleza consiencte, </h1>
                <h1 className="text-4xl text-white font-medium">nacida de la <span className="text-acento italic">naturaleza</span> </h1>
                <div className="border w-20 my-7 border-acento"></div>
                <p className="text-white font-medium">Creamos cosmética natural, artesanal y ecoamigable</p>
                <p className="text-white font-medium">para cuidar tu cuerpo mientras cuidas del planeta.</p>
                <div className="flex mt-7 text-white">
                    
                    <div className="flex flex-col items-center text-center w-38">
                        <Rabbit size="40" strokeWidth={1} className=""/>
                        <p className="font-medium">Libre de crueldad animal</p>
                    </div>
                    <div className="flex flex-col items-center text-center w-30">
                        <Earth size="40" className="" strokeWidth={1}/>
                        <p className="font-medium">Sostenible y ecoamigable</p>
                    </div>
                    <div className="flex flex-col items-center text-center w-30">
                        <Leaf size="40" className="" strokeWidth={1}/>
                        <p className="font-medium">Ingredientes naturales</p>
                    </div>
                    <div className="flex flex-col items-center text-center w-35">
                        <FlaskConical size="40" className="" strokeWidth={1}/>
                        <p className="font-medium">Hecho con amor y consciencia</p>
                    </div>
                </div>
                <div className="flex gap-5 mt-7 text-white">
                    <button className="bg-acento px-5 py-2 rounded-sm cursor-pointer">CONOCE MÁS </button>
                    <button className="px-5 py-2 rounded-sm cursor-pointer border">IR A LA TIENDA </button>
                </div>
            </div>
        </div>
    )};