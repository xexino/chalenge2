import React from 'react'

export default function Summary({Quant,TOTAL,LastCoast}) {
    return (
        <>
            <h3 className="p-3">Summary</h3>
            <hr />
            <div className="d-flex justify-content-around">
                <h3> {Quant} items</h3>
                <h3>$ {TOTAL}</h3>
            </div>

            <h5 className="p-3"><b>SHIPPING :</b> </h5>
            <select className="form-control text-center  mx-auto" style={{ width: " 60%" }} onChange={LastCoast}>
                <option value="delivery">Standar-delivery-$5.00</option>
                <option value="delivery">Premium-delivery-$15.00</option>
                <option value="delivery">Fast-delivery-$40.00(daily delivery)</option>
            </select>
            <div className="d-flex m-2">
                <h5 className="p-2"><b> GIVE CODE :</b></h5>
                <select name="GIVE CODE" className="form-control text-center mx-auto" style={{ width: " 15%" }}>
                    <option value="delivery">0%</option>
                    <option value="delivery">10%</option>
                    <option value="delivery">20%</option>
                </select>
            </div>
            <hr />
            <div className="d-flex justify-content-around">
                <p><b>TOTAL PRICE</b> </p>
                <p><b>$ 137.00</b></p>
            </div>
            <button type="button" className="mx-auto btn btn-dark">REGISTER</button>
        </>
    )
}
