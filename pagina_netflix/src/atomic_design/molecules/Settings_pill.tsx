import './Settings_pill.css';

type liProps = {
    url_text: string;
    text: string;
    image_location?: string;
}

function Setting_pill({url_text, text, image_location}: liProps){
    return(
        <li id="profile_setting_li">
            <a
                id="profile_setting_a"
                aria-current="page"
                href="#"
            >
                <img src={url_text} id="profile_setting_img"/>
                <p id="profile_setting_p">{text}</p>
                <img src={ image_location } id="profile_setting_img"/>
            </a>
        </li>
    )
}

export default Setting_pill;