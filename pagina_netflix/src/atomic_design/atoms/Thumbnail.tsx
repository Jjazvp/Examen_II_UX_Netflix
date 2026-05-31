import './Thumbnail.css';
import React, { useRef, useState} from "react";
import Edad from '../atoms/Edad.tsx';
import Cantidad from '../atoms/Cantidad.tsx';
import Badge from '../atoms/BadgeHD.tsx';
import GenreBadge from '../atoms/Genre.tsx';
import { createPortal } from 'react-dom';
import Button from '../atoms/Button';
import play_logo from '../../images/play-logo.png';
import like_logo from '../../images/like.png'
import plus_logo from '../../images/plus.png'
import dropdown_logo from '../../images/dropdown.png'

export type tnProps = {
    id: number;
    title: string;
    imageUrl: string;
    edad: string;
    cantidad: string;
    hdBadge: string;
    genres: string[];
}

const Thumbnail = ({id, title, imageUrl, edad, cantidad, hdBadge, genres}:tnProps) => {
    const [cardActiva, setCardActiva] = useState<tnProps | null>(null);
    const [posicionHover, setPosicionHover] = useState<{ left: number; width: number; top: number } | null>(null);
    const timeoutRef = useRef<number | null>(null);

    const handleMouseEnter = (card: tnProps, e: React.MouseEvent<HTMLDivElement>) => {
        const elemento = e.currentTarget;
        
        timeoutRef.current = window.setTimeout(() => {
            const rect = elemento.getBoundingClientRect();
            
            setPosicionHover({
                left: rect.left + window.scrollX,
                top: rect.top + window.scrollY,
                width: rect.width,
            });
            setCardActiva(card);
        }, 400); 
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current);

        timeoutRef.current = window.setTimeout(() => {
            setCardActiva(null);
            setPosicionHover(null);
        }, 100);
    };

    const mantenerTarjetaActiva = () => {
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };

    return (
        <>
            <div key= {id} className="thumbnail-container" 
                onMouseEnter={(e) => handleMouseEnter({id, title, imageUrl, edad, cantidad, hdBadge, genres}, e)}
                onMouseLeave={handleMouseLeave}
            >
                <img src={imageUrl} alt={title} />
            </div>
            {cardActiva && posicionHover && createPortal(
                <div className='hover-card-container'
                    style={{
                        position: 'absolute',
                        zIndex: 9999,
                        left: `${posicionHover.left - (posicionHover.width * 0.25)}px`,
                        top: `${posicionHover.top - 40}px`,
                        width: `${posicionHover.width * 1.5}px`,
                    }}
                    onMouseEnter={mantenerTarjetaActiva}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="hover-thumbnail-container">
                        <img src={imageUrl} alt={title} />
                    </div>
                    <div className="hover-info-container">
                        <div className="hover-info-buttons">
                            <div className="hover-info-button-left">
                                <Button icon={play_logo} type='play'></Button>
                                <Button icon={plus_logo}></Button>
                                <Button icon={like_logo}></Button>
                            </div>
                            <Button icon={dropdown_logo}></Button>
                        </div>
                        <div className="hover-info-text">
                            <Edad edad={edad + '+'} />
                            <Cantidad cantidad={cantidad}/>
                            <Badge HD='HD'/>
                        </div>
                        <div className="hover-info-genres">
                            {genres.map((data, i) => (
                                <GenreBadge genre= {data + (i < genres.length-1? " • ":"")}/>
                            ))}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    )
}

export default Thumbnail;