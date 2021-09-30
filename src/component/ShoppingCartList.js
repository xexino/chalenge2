import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'

export default function ShoppingCartList(props) {
     return (
  
       <div className="List-items">
         {props.listCommandes.map(c => 
                <ShoppingCartItem 
                    key={c.id}
                    id={c.id}
                    title={c.title}
                    desc={c.desc} 
                    image={c.image}
                    price={c.price} 
                    quantite={c.quantite}
                    onAddQuantite={props.onClickAddQuantite}
                    handelDelete={props.handelClickDelete}
                    decQuantity={props.onClickDecQuantite}
                    />)}
        </div>




    )
}
