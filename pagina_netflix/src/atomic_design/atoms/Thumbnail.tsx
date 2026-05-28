import './Thumbnail.css';

export type tnProps = {
    title: string;
    imageUrl: string;
}

const Thumbnail = ({title, imageUrl}:tnProps) => {
    return (
        <div className="thumbnail-container">
            <img src={imageUrl} alt={title} />
        </div>
    )
}

export default Thumbnail;