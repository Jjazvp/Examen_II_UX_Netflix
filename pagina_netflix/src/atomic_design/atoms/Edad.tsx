import '../atoms/Edad.css';

export type edadProps = {
    edad: string;
}

const Edad = ({edad}:edadProps) => {
    return(
        <span className='edad-container'>{edad}</span>
    );
}

export default Edad;