import { Mail, MapPin, Phone } from "lucide-react"

export const Footer = () => {
    return (
        <div className="bg-primary px-20 py-10 text-white">
            <div className="flex">
                <div className="basis-1/4 flex flex-col justify-center items-center">
                    <div className="w-[45%]">
                        <img className="h-30 w-50" src="/imagenes/logo.png"/>
                        <p className="italic mt-3">Belleza consciente, nacida de la naturaleza</p>
                    </div>
                    <div className="flex gap-5 mt-3">
                        <img src="/imagenes/instagram.svg" className="w-6 h-6"/>
                        <img src="/imagenes/facebook.svg" className="w-6 h-6"/>
                        <img src="/imagenes/tiktok.svg" className="w-6 h-6"/>
                        <img src="/imagenes/pinterest.svg" className="w-6 h-6"/>
                        <img src="/imagenes/youtube.svg" className="w-6 h-6"/>
                    </div>
                </div>
                <div className="basis-2/4 flex">
                    <div className="flex-1">
                        <h1 className="font-semibold mb-2 text-lg">TIENDA</h1>
                        <p>Todos los productos</p>
                        <p>Cuidado facial</p>
                        <p>Cuidado corporal</p>
                        <p>Cuidado capilar</p>
                        <p>Cuidado labial</p>
                        <p>Accesorios</p>
                        <p>Kits y regalos</p>
                    </div>
                    <div className="flex-1">
                        <h1 className="font-semibold mb-2 text-lg">NOSOTRAS</h1>
                        <p>Nuestra historia</p>
                        <p>Filosofia</p>
                        <p>Ingredientes</p>
                        <p>Sostenibilidad</p>
                        <p>Blog</p>
                        <p>Contacto</p>
                    </div>
                    <div className="flex-1">
                        <h1 className="font-semibold mb-2 text-lg">AYUDA</h1>
                        <p>Preguntas frecuentes</p>
                        <p>Envios y entregas</p>
                        <p>Cambios y devoluciones</p>
                        <p>Términos y condiciones</p>
                        <p>Politicas de privacidad</p>
                    </div>
                </div>
                <div className="basis-1/4">
                    <h1 className="font-semibold mb-2 text-lg">CONTACTO</h1>
                    <div className="flex gap-4 mb-3">
                        <Mail />
                        <p>hola@floraphine.com</p>
                    </div>
                    <div className="flex gap-4 mb-3">
                        <Phone />
                        <p>+52 1 65454879</p>
                    </div>
                    <div className="flex gap-4">
                        <MapPin />
                        <p>Morelia, Mexico</p>
                    </div>
                </div>
            </div>
        </div>
    )}