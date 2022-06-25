import "./Card.scss";

const Card = ({ id, title, image, desc }) => {
  //   const {title, image, desc } = data;
  return (
    <div className="cards">
      <h1 className="title">{title}</h1>
      <img src={image} alt="text" />

      <div className="card-over">
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
