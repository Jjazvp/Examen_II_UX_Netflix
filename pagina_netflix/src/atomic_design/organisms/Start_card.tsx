import Nav_bar from '../molecules/Nav_bar.tsx';
import Banner_title_card from '../molecules/Banner_title_card.tsx';
import './Start_card.css';
import reload_logo from '../../images/reload-logo.png'

function Start_card() {
    return (
        <div>
            <div id="banner_div">
                <Nav_bar/>
                <div id="div_principal_start_card">
                    <Banner_title_card />
                    <div id="banner_options_div">
                        <img src={ reload_logo } className="img"/>
                        <div id="age_res_div">
                            <p id="p_age">13+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Start_card;