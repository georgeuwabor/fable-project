const SampleCart = (props) => {
  return (
    <>
      <div id="cart_container">
        <div id='cart_foto"'>
          <img src={props.img} alt="" />
        </div>

        <div id="cart_info">
          <h1>{props.kls}</h1>
          <p>{props.collection}</p>
          <p>{props.article}</p>

          <div className="cart_info1">
            <div>{props.size}</div>
            <div>M</div>
            <div>{props.color}</div>
            <div>Black</div>
            <div>{props.quatity}</div>
            <div>
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </div>

            <div>{props.price}</div>
            <div>€105</div>
            <div>Delete</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SampleCart;
