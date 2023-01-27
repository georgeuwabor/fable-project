const SummaryCart = () => {
    return (<>
        <div id="flex_column">
            <div className="flex_content">
                <p>Summary:</p>
                <p>$340</p>

            </div>
            <div className="flex_content">
                <p>Delivery:  </p>
                <p>$0</p>
            </div>
            <div className="flex_content">
                <p>Promocode:</p>
                <p>$340</p>
            </div>

        </div>

        <div className="flex_content">
            <p>Total:</p>
            <p>$340</p>
        </div>

        <div>
            <input placeholder="Enter promocode" />
            <button>Apply</button>
        </div>
    </>)
}

export default SummaryCart