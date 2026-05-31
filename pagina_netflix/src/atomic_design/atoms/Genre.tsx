import './Genre.css';

export type genreProps = {
    genre: string;
}

const GenreBadge = ({ genre }: genreProps) => {
    return (
        <span className="genre-badge">{genre}</span>
    );
}

export default GenreBadge;
