import './Banner_title_card.css'
import logo from '../../images/One-Piece-Logo-PNG-Images.png'
import play_logo from '../../images/play-logo.png'
import info_logo from '../../images/information-logo.png'

function Banner_title_card() {
  return (
    <div className="card" id="div_principal_banner_card">
      <div className="card-body">
        <img src={logo} alt="title logo"/>
        <h2>
          Ep 78-92 HD remaster Available
        </h2>
        <p className="card-text" id="p_description">
          Monkey D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. 
          With a course charted for the treacherous waters of the Grand Line and beyond, this is one captain who'll never give 
          up until he's claimed the greatest treasure on Earth: the Legendary One Piece!
        </p>
        <div id="div_btns">
          <button id="play_btn">
            <img src={play_logo} id="play_img"/>
            <p style={{color: 'black'}}>Play</p>
          </button>
          <button id="more_info_btn">
            <img src={info_logo} id="info_img"/>
            <p>More Info</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner_title_card;