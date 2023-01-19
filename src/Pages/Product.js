import Navbar from "../Component/Navbar";
import Fable from "../Component/Fable";
import Foto4 from "../Asset/Foto4.svg";

const Product = () => {
  return (
    <>
      <Navbar />
      <Fable name={"JACKET KLS"} price={"€" + 105} img={Foto4} />
    </>
  );
};

export default Product;
