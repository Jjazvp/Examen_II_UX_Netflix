import './Profile_pill.css';
import './Settings_pill.css';

type liProps = {
    url_text: string;
    text: string;
    image_location?: string;
    href_text: string;
}

function Setting_pill({url_text, text, image_location, href_text}: liProps){
    if(image_location){
        return(
            <li className="profile_setting_li rounded">
                <a
                    className="profile_setting_a"
                    aria-current="page"
                    href={href_text}
                >
                    <img src={url_text} id="profile_img_prof"/>
                    <p className="profile_setting_p">{text}</p>
                    <img src={ image_location } id="profile_setting_img"/>
                </a>
            </li>
        )
    }else{
        return(
            <li className="profile_setting_li rounded">
                <a
                    className="profile_setting_a"
                    aria-current="page"
                    href="#"
                >
                    <img src={url_text} id="profile_img_prof"/>
                    <p className="profile_setting_p">{text}</p>
                </a>
            </li>
        )
    }
}

export default Setting_pill;