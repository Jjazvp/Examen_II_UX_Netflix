import './Carousel.css';
import Thumbnail from '../atoms/Thumbnail.tsx';

type CarouselProps = {
    title?: string;
}

export const Carousel =({title}:CarouselProps) => {
    const thumbnailData = [
        { title: 'Pelicula 1', imageUrl: 'https://images.unsplash.com/photo-1779881718724-5c70d8c2f379?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        { title: 'Pelicula 2', imageUrl: 'https://plus.unsplash.com/premium_photo-1755882941148-df1697101a28?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        { title: 'Pelicula 3', imageUrl: 'https://images.unsplash.com/photo-1777714958954-fdac4f5bf34b?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        { title: 'Pelicula 4', imageUrl: 'https://images.unsplash.com/photo-1777473587988-b929d723a9fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        { title: 'Pelicula 5', imageUrl: 'https://images.unsplash.com/photo-1777714959056-3bfda971c97a?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        { title: 'Pelicula 5', imageUrl: 'https://images.unsplash.com/photo-1777714959056-3bfda971c97a?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        { title: 'Pelicula 5', imageUrl: 'https://images.unsplash.com/photo-1777714959056-3bfda971c97a?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
        { title: 'Pelicula 5', imageUrl: 'https://images.unsplash.com/photo-1777714959056-3bfda971c97a?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    ]
    return(
        <div className='carousel-row'>
            <h2>{title}</h2>
            <div className="carousel-container">
                {thumbnailData.map((data, index) => (
                    <Thumbnail key= {index} title= {data.title} imageUrl= {data.imageUrl}/>
                ))}
            </div>
        </div>
    )
}