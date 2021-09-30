const Summary = ({total,Quant}) => {
    return (
        <>
            <h2>Summary</h2>
            <hr />
            <div className="d-flex justify-content-between">
            <h5>{Quant} Item </h5>
            <h5>&euro; {total} </h5>
            </div>
            <br />
            <h5>Shipping</h5>
            <select name="" id="">
                <option value="Shipping-Delivery-$5.00">Shipping-Delivery-$5.00</option>
            </select>
            <br /> <br />
            <h5>GIVE CODE</h5>
            <input type="number" />

            <hr />

            <h5>TOTAL PRICE : &euro;   {total}</h5>
            <button type="button" className="btn btn-dark drake">REGISTER</button>
        </>
    );
}

export default Summary;