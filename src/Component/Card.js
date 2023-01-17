import "../Styles/Card.css";
import Foto1 from "../Asset/Foto1.svg";
import Foto2 from "../Asset/Foto2.svg";
import Foto3 from "../Asset/Foto3.svg";
import Sample from "./Samplecard";
const Card = () => {
  return (
    <>
      <div id="Card_Catalog">
        <Sample img={Foto1} name={"Jacket KLS Beige"} price={"€" + 105} />
        <Sample img={Foto2} name={"Jacket KLS Black"} price={"€" + 105} />
        <Sample img={Foto3} name={"Jacket KLS Graphite"} price={"€" + 105} />
      </div>
    </>
  );
};

export default Card;
