import React from 'react'

export default function ShoppingCartSearch({filterlistByTitile  ,filterByTitile}) {
    return (
        <>
             <input 
                    
                    onKeyUp={filterByTitile}
                    ref={filterlistByTitile}
                    type="search" 
                    placeholder="filter by title" 
                    className="search col" />
        </>
    )
}
