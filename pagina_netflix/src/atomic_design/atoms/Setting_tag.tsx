import './Setting_tag.css';

type tagProps = {
    href?: string;
    text: string;
}

export default function Setting_tag({ href, text }: tagProps){
    return(
        <a href={href} id="a_tag">
            <p id="p_tag">{ text }</p>
        </a>
    )
}