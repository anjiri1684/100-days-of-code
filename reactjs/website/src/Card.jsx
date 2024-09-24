import Image from "./assets/vin.jpg";

function Card() {
  return (
    <div className="card">
      <img src={Image} alt="profile pictire" className="card-image" />
      <h2 className="card-title">Vincent Anjiri</h2>
      <p className="card-text">FullStack Developer, I love reactjs</p>
    </div>
  );
}

export default Card;
