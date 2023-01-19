import "../Styles/Form.css";

const Form = (props) => {
  return (
    <>
      <div id="shopping_details">
        <p>{props.name}</p>
        <p>-</p>
        <p>{props.order}</p>
      </div>
      <div>
        <h2>City</h2>
        <div>
          <form>
            <label for="city"></label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Enter city"
            ></input>
          </form>
        </div>

        <div>
          <h2>Address</h2>
          <form>
            <label for="address"></label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter address"
            ></input>
          </form>
        </div>

        <div>
          <h2>Recipient's details</h2>
          <form>
            <p>Name and surname</p>
            <label for="name"></label>
            <input
              type="text"
              id="namee"
              name="phone"
              placeholder="Enter phone number"
            ></input>
          </form>
          <p>Phone</p>
          <form>
            <label for="phone"></label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter phone number"
            ></input>
          </form>
          <p>Email</p>
          <form>
            <label for="email"></label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter email"
            ></input>
          </form>
          <div>
            <h2>Payment method</h2>
            <button>Payment card</button>

            <div>
              <fieldset>
                <p>Cash on delivery</p>
              </fieldset>
            </div>
          </div>
          <div>
            <input
              input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              value="checkbox 1"
            ></input>
            <label for="checkbox">
              I agree to the terms of the offer and the loyalty policy
            </label>
          </div>
          <div>
            <fieldset>
              <p>Place an Order</p>
            </fieldset>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
