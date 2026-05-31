import Start_card from "../organisms/Start_card";
import Content from "../organisms/Content";
import Footer from "../organisms/Footer";
import './Home.css';

function Home(){
    return(
        <div id="div_principal_home">
            <Start_card/>
            <Content/>
            <Footer/>
        </div>
    )
}

export default Home;