import { Carousel } from '../molecules/Carousel.tsx';
import { thumbnailData, continuarViendo, top10, nuevoNetflix, favPublico, miLista, soloNetflix } from '../data/data.tsx';

export default function Content(){
    return(
        <div>
            <Carousel title="Nuestra seleccion de hoy para ti" lista={thumbnailData}/>
            <Carousel title="Continuar viendo" lista={continuarViendo}/>
            <Carousel title="Lo nuevo en Netflix" lista={nuevoNetflix}/>
            <Carousel title="Mi lista" lista={miLista}/>
            <Carousel title="Top 10 en Honduras" lista={top10}/>
            <Carousel title="Solo en Netflix" lista={soloNetflix}/>
            <Carousel title="Favoritos del publico" lista={favPublico}/>
        </div>
    )
}