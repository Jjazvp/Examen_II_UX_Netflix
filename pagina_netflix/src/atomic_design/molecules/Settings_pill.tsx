import './Settings_pill.css';

type liProps = {
    url_text?: string;
    text: string;
    href_text: string;
}

function Setting_pill({url_text, text, href_text}: liProps){
    return(
        <li className="profile_setting_li rounded">
            <a
                className="profile_setting_a"
                aria-current="page"
                href={href_text}
            >
                <img src={url_text} id="profile_setting_img"/>
                <p className="profile_setting_p">{text}</p>
            </a>
        </li>
    )
}

export default Setting_pill;