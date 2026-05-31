import { Carousel } from '../molecules/Carousel.tsx';
import { thumbnailData, continuarViendo } from '../data/data.tsx';

export default function Content(){
    return(
        <div>
            <Carousel title="Nuestra seleccion de hoy para ti" lista={thumbnailData}/>
            <Carousel title="Continuar viendo" lista={continuarViendo}/>
            <Carousel title="Lo nuevo en Netflix" lista={thumbnailData}/>
            <Carousel title="Mi lista" lista={thumbnailData}/>
            <Carousel title="Top 10 en Honduras" lista={thumbnailData}/>
            <Carousel title="Solo en Netflix" lista={thumbnailData}/>
            <Carousel title="Favoritos del publico" lista={thumbnailData}/>
        </div>
    )
}