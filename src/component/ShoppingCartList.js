import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'

export default function ShoppingCartList({ListData,addQuantity,decQuantity,DeleteItem }) {
    return (
        <>
            <div className=" border row d-flex justify-content-between m-2 p-2">
                 {ListData.map(t=><ShoppingCartItem 
                     key={t.id}
                     id={t.id}
                     title={t.title}
                     desc={t.desc}
                     img={t.img}
                     price={t.price}
                     quantite={t.quantite}
                     addQuantity={addQuantity}
                     decQuantity={decQuantity}
                     DeleteItem={DeleteItem}
                  
                 />)}
            </div>

        </>
    )
}
