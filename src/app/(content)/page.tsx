import { CategoriasHome } from "../components/content/home/CategoriasHome";
import { Footer } from "../components/content/home/Footer";
import { Frase } from "../components/content/home/Frase";
import { Hero } from "../components/content/home/Hero";
import { NuestraMarca } from "../components/content/home/NuestraMarca";

export default async function Home() {

    return(
        <div>
            <Hero />
            <CategoriasHome />
            <NuestraMarca />
            <Frase />
            <Footer />
        </div>
    )
}