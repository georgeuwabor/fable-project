const Sample = (props) => {
  return (
    <>
      <div id="Card_Foto_Catalog1">
        <img src={props.img} alt="" />
        <div className="jacket">
          <p id="name">{props.name}</p>
          <p id="price">{props.price}</p>
        </div>
      </div>
    </>
  );
};

export default Sample;
