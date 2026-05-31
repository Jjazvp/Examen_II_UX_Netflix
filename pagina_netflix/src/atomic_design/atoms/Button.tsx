import './Button.css';

export type btnProps = {
    icon: string;
    type?: string;
    onClick?: () => void;
}

const Button = ({icon, type, onClick }: btnProps) => {
    return (
        <button className={`button ${type ? ` button-${type}`: ''}`} onClick={onClick}>
            <img src={icon} alt="play" className={`icon-button ${type ? `icon-button-${type}`: ''}`} />
        </button>
    );
}

export default Button;
