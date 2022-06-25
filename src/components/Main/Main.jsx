import "./Main.scss";
import { data } from "../../helpers/data";
import Card from "../Card/Card";

const Main = () => {
  return (
    <div className="card-container">
      {data.map((item) => (
        <Card {...item} key={item["id"]} />
      ))}
    </div>
  );
};

export default Main;
