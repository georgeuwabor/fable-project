import "../Styles/Fable.css";
import Foto4 from "../Asset/Foto4.svg";
import Sample from "./Samplecard";
const Fable = (props) => {
  return (
    <>
      <div id="fable_container">
        <p>Fable of Klassik</p>
        <p>-</p>
        <p>Jacket</p>
      </div>
      <div id="fable_foto">
        <img src={Foto4} alt="" />
      </div>
      <div id="fable_cart">
        <h1 className="name">JACKET KLS</h1>
        <h1 className="price">€105</h1>
        <button className="btn-cart">Add to cart</button>
        <h3>Product Info</h3>
        <p>
          Jacket made of a loose fit makes the product a universal element of
          the upper layer. Two patch pockets and one hidden pocket. Branded
          lining with FABLE pattern. Shoulder pads of medium rigidity for
          shaping.
        </p>
      </div>
    </>
  );
};

export default Fable;
