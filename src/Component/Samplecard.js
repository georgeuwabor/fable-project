const Sample = (props) => {
  return (
    <>
      <div id="Card_Foto_Catalog1">
        <img src={props.img} alt="" />
        <div className="jacket">
          <p>{props.name}</p>
          <p>{props.price}</p>
        </div>
      </div>
    </>
  );
};

export default Sample;
