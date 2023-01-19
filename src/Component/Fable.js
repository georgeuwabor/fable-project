import "../Styles/Fable.css";

const Fable = (props) => {
  return (
    <>
      <div id="fable_container">
        <p>Fable of Klassik</p>
        <p>-</p>
        <p>Jacket</p>
      </div>
      <div id="con_div">
        <div id="fable_foto">
          <img src={props.img} alt="" />
        </div>
        <div id="fable_cart">
          <h1 className="name">{props.name}</h1>
          <h1 className="price" style={{ marginBottom: "10%" }}>
            {props.price}
          </h1>
          <button className="btn-cart" style={{ marginBottom: "5%" }}>
            Add to cart
          </button>
          <h3>Product Info</h3>
          <p style={{ marginRight: "15%", marginTop: "-1%" }}>
            Jacket made of a loose fit makes the product a universal element of
            the upper layer. Two patch pockets and one hidden pocket. Branded
            lining with FABLE pattern. Shoulder pads of medium rigidity for
            shaping.
          </p>
        </div>
      </div>
    </>
  );
};

export default Fable;
