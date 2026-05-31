import '../atoms/BadgeHD.css';

export type HDProps = {
    HD: string;
}

const Badge = ({HD}:HDProps) => {
    return(
        <span className='badge-container'>{HD}</span>
    );
}

export default Badge;