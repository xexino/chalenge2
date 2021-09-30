import React from 'react'

export default function ShoppingCartItem({ title, desc, image, quantite, onAddQuantite, id, price, handelDelete,decQuantity }) {


    return (
        <>
            <div className="row border-bottom p-2 ">
                <br />
                <div className="row main align-items-center ">
                    <div className="col-2"><img className="img-fluid" src={image} alt="T-shirt"/></div>
                    <div className="col">
                        <div className="row text-muted">{title}</div>
                        <div className="row">{desc}</div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <button
                            onClick={()=>decQuantity(id)}
                            type="button"
                            className="btn btn-light">-</button>
                        <input 
                            type="number"
                            value={quantite}
                            className="mx-sm-1 mb-1" />
                        <button
                            onClick={() => onAddQuantite(id)}
                            type="button"
                            className="btn btn-light">+</button>
                    </div>
                    <div className="col"> &euro; {price}
                    <button
                        onClick={() => handelDelete(id)}
                        type="button"
                        className="btn btn-light">
                      <i className="far fa-times-circle"></i> 
                    </button> 
                    </div>
                </div>
            </div>

        </>
    )
}
