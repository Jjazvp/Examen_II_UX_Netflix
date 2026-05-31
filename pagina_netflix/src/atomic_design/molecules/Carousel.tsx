import './Carousel.css';
import Thumbnail, { type tnProps } from '../atoms/Thumbnail.tsx';
import { useState, useRef } from 'react';

type CarouselProps = {
    title?: string;
    lista: tnProps[];
}

export const Carousel =({title, lista}:CarouselProps) => {
    const [showLeft, setShowLeft] = useState<boolean>(false);
    const [showRight, setShowRight] = useState<boolean>(true);
    const filaRef = useRef<HTMLDivElement>(null);

    const scroll = (direccion: 'left' | 'right') => {
        const fila = filaRef.current;
        if (!fila) 
            return;
        const cantidadScroll = fila.clientWidth * 0.9;
        fila.scrollBy({
            left: direccion === 'left' ? -cantidadScroll : cantidadScroll,
            behavior: 'smooth',
        });
    }
    
    const handleScroll = () => {
        const fila = filaRef.current;
        if (!fila)
            return;
        setShowLeft(fila.scrollLeft > 10);
        setShowRight(fila.scrollLeft < fila.scrollWidth - fila.clientWidth - 10);
    }

    return(
        <div className='carousel-row'>
            <h2>{title}</h2>
            <div className='carousel-container'>
                {showLeft && (
                    <button className='carousel-arrow carousel-arrow-left' onClick={() => scroll('left')}> &#x2039; </button>
                )}
                <div className="carousel" ref={filaRef} onScroll={handleScroll}>
                    {lista.map((data, index) => (
                            <Thumbnail key= {index} id= {data.id} title= {data.title} imageUrl= {data.imageUrl} edad={data.edad} 
                            cantidad={data.cantidad} hdBadge={data.hdBadge} genres={data.genres} videoUrl={data.videoUrl} 
                            progressBar={data.progressBar}
                            />
                    ))}
                </div>
                {showRight && (
                    <button className='carousel-arrow carousel-arrow-right' onClick={() => scroll('right')}> &#x203a; </button>
                )}
            </div>
        </div>
    )
}