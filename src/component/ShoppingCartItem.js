import React from 'react'

export default function ShoppingCartItem({title,img,price,addQuantity,quantite,id,decQuantity,DeleteItem}) {
    return (
        <>

            <div className="d-flex product col-5 p-2 ">
                <img src={img} alt="" />
                <div className="m-3">
                    <h5 className="text-muted">{title }</h5>
                    <p><b>Cotton T-shirt</b> </p>
                </div>
            </div>
            <div className="col d-flex  align-items-center s-5">
                <button 
                  onClick={()=>decQuantity(id)}
                  type="button" 
                  className="btn btn-secondary">-</button>
                <input
                  type="number" 
                  value={quantite} 
                  className="form-control m-2" />
                <button 
                  onClick={()=>addQuantity(id)}
                  type="button" 
                  className="btn btn-secondary">+</button>
            </div>
            <div className="d-flex  align-items-center col">
                $ {price}
            </div>
            <div className="col d-flex  align-items-center ">
                <button 
                onClick={()=> DeleteItem(id)}
                type="button" 
                className="btn btn-danger"><i className="fas fa-ban"></i></button>
            </div>
        </>
    )
}
