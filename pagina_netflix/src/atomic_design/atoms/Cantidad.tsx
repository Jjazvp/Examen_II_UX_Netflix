import '../atoms/Cantidad.css';

export type cantProps = {
    cantidad: string;
}

const Cantidad = ({cantidad}:cantProps) => {
    return (
        <span className='cantidad-container'>{cantidad}</span>
    );
}

export default Cantidad;