import Nav_bar from '../molecules/Nav_bar.tsx';
import Banner_title_card from '../molecules/Banner_title_card.tsx';
import './Start_card.css';
import { Carousel } from '../molecules/Carousel.tsx';
import { thumbnailData } from '../data/data.tsx';

function Start_card() {
    return (
        <div className='Home'>
            <div id="banner_div">
                <Nav_bar />
                <div>
                    <Banner_title_card />
                </div>

            </div>
            <div>
                <Carousel title="Tendencias" lista={thumbnailData}/>
                <Carousel title="Mas vistos" lista={thumbnailData}/>
                <Carousel title="Mas vistos" lista={thumbnailData}/>
                <Carousel title="Mas vistos" lista={thumbnailData}/>
                <Carousel title="Mas vistos" lista={thumbnailData}/>
                <Carousel title="Mas vistos" lista={thumbnailData}/>
            </div>
        </div>
    )
}

export default Start_card;