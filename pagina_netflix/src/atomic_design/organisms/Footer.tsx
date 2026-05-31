import './Footer.css'
import facebook_icon from '../../images/facebook-icon.png';
import instagram_icon from '../../images/instagram-icon.png';
import twitter_icon from '../../images/twitter-icon.png';
import youtube_icon from '../../images/youtube-icon.png';
import Setting_tag from '../atoms/Setting_tag';

export default function Footer(){
    return(
        <div id="div_principal_footer">
            <ul id="ul_social_networks">
                <li className="social_network_li">
                    <a
                        href="#"
                    >
                        <img src={facebook_icon} className="social_network_img"/>
                    </a>
                </li>
                <li className="social_network_li">
                    <a
                        href="#"
                    >
                        <img src={instagram_icon} className="social_network_img"/>
                    </a>
                </li>
                <li className="social_network_li">
                    <a
                        href="#"
                    >
                        <img src={twitter_icon} className="social_network_img"/>
                    </a>
                </li>
                <li className="social_network_li">
                    <a
                        href="#"
                    >
                        <img src={youtube_icon} className="social_network_img"/>
                    </a>
                </li>
            </ul>
            <div className="container text-center" id="footer_tags_div">
                <div className="row">
                    <div className="col">
                        <Setting_tag
                            href = "#"
                            text = "Audio Description"
                        />
                    </div>
                    <div className="col">
                        <Setting_tag
                            href = "#"
                            text = "Help Center"
                        />
                    </div>
                    <div className="col">
                        <Setting_tag
                            href = "#"
                            text = "Gift Cards"
                        />
                    </div>
                    <div className="col">
                        <Setting_tag
                            href = "#"
                            text = "Media Center"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Setting_tag
                            href = "#"
                            text = "Investor Relations"
                        />
                    </div>
                    <div className="col">
                        <Setting_tag
                            href = "#"
                            text = "Jobs"
                        />
                    </div>
                    <div className="col">
                        <Setting_tag
                            href = "#"
                            text = "Terms of Use"
                        />
                    </div>
                    <div className="col">
                        <Setting_tag
                            href = "#"
                            text = "Privacy"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Setting_tag
                            href = "#"
                            text = "Legal Notices"
                        />
                    </div>
                    <div className="col">
                        <Setting_tag
                            href = "#"
                            text = "Cookie Preferences"
                        />
                    </div>
                    <div className="col">
                        <Setting_tag
                            href = "#"
                            text = "Corporate Information"
                        />
                    </div>
                    <div className="col">
                        <Setting_tag
                            href = "#"
                            text = "Contact Us"
                        />
                    </div>
                </div>
            </div>
            <div>
                <Setting_tag
                    text = "@ 1997-2026 Netflix, Inc."
                />
            </div>
        </div>
    )
}