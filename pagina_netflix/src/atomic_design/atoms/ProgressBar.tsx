import './ProgressBar.css'

export type pbProps = {
    cantidad: string;
}

const ProgressBar = ({cantidad}:pbProps) => {
    return(
        <div className={'progressBar'}>
            <div className="progressBar-fill" style={{ width: `${cantidad}%` }}/>
        </div>
    );
}

export default ProgressBar;