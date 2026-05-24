import './Banner_title_card.css'

function Banner_title_card() {
  return (
    <div className="card" id="div_principal">
      <div className="card-body">
        <img src="https://www.clipartmax.com/png/small/15-151830_free-one-piece-clipart-one-piece-logo-png.png" alt="Free One Piece Clipart"/>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          Card subtitle
        </h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
}

export default Banner_title_card;