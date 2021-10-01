import { useEffect, useRef, useState } from "react";
import ShoppingCartList from "./ShoppingCartList";
import ShoppingCartSearch from "./ShoppingCartSearch";
import Summary from "./Summary";
const ShoppingCart = () => {


    const [Data, setData] = useState([
        {
            id: 1,
            title: "Shirt black",
            desc: "Cotton T-shirt",
            img: "https://media.istockphoto.com/photos/blank-black-tshirt-front-with-clipping-path-picture-id483960103?k=20&m=483960103&s=612x612&w=0&h=H4TNt5SOmcNIRMqrKY7J5u2Yy-f0ZZbD_Dsqqw3if1I=",
            price: 44,
            quantite: 1,

        },
        {
            id: 2,
            title: "Shirt blue",
            desc: "Cotton T-shirt",
            img: "https://5.imimg.com/data5/NT/IL/MY-40406244/blue-t-shirt-500x500.jpg",
            price: 44,
            quantite: 1,

        },
        {
            id: 3,
            title: "Shirt pink",
            desc: "Cotton T-shirt",
            img: "https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|140:140,https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|220:220,https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|540:540",
            price: 44,
            quantite: 1,

        },
    ])
const addQuantity = (id) =>{
    let newData = [...Data]
    newData.forEach(D => {
        if (D.id === id) {
            D.quantite ++
        }
    });
    setData([...newData])
}

const decQuantity = (id) =>{
    let newData = [...Data]
    newData.forEach(D => {
       if (D.quantite===0) {
           alert("do yu want to delete this item")
       } else
        if (D.id === id) {
            D.quantite --
        }
    });
    setData([...newData])
}

const DeleteItem = (id) => {
    let newData = [...Data]
    newData =  newData.filter(newData=> newData.id !==id)
    setData([...newData])

}

const [Quant, setQuant] = useState(0);

useEffect(() => {
    QuanT();
},[Data]);

const QuanT = () => {

    let QuantVal = 0;
    Data.forEach((c) => {
        QuantVal +=  c.quantite
    })
    setQuant(QuantVal);
};
const [TOTAL, setTOTAL] = useState(0);

useEffect(() => {
    total();
},[Data]);

const total = () => {

    let Total = 0;
    Data.forEach((c) => {
        Total +=  c.quantite * c.price 
    })
    setTOTAL(Total);
};
const [LASTCOAST, setLASTCOAST] = useState(0);

useEffect(() => {
    LastCoast();
},[Data]);
const LastCoast = () =>{
  console.log("Standar")
//   const SelectedValue = target.value;
//   setLASTCOAST(SelectedValue);
  
}


const [listDataBAckup, setlistDataBAckup] = useState([
    {
        id: 1,
        title: "Shirt black",
        desc: "Cotton T-shirt",
        img: "https://media.istockphoto.com/photos/blank-black-tshirt-front-with-clipping-path-picture-id483960103?k=20&m=483960103&s=612x612&w=0&h=H4TNt5SOmcNIRMqrKY7J5u2Yy-f0ZZbD_Dsqqw3if1I=",
        price: 44,
        quantite: 1,

    },
    {
        id: 2,
        title: "Shirt blue",
        desc: "Cotton T-shirt",
        img: "https://5.imimg.com/data5/NT/IL/MY-40406244/blue-t-shirt-500x500.jpg",
        price: 44,
        quantite: 1,

    },
    {
        id: 3,
        title: "Shirt pink",
        desc: "Cotton T-shirt",
        img: "https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|140:140,https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|220:220,https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|540:540",
        price: 44,
        quantite: 1,

    },
])
const filterlistByTitile = useRef("")
const filterByTitile = () =>{
    let query = filterlistByTitile.current.value;
    if(query==="")  setData([...listDataBAckup])
    else{
    let newListDAta = [...Data]
    newListDAta = newListDAta.filter((T)=>T.title.includes(query))
    setData([...newListDAta])
    }
  }




    return (
        <>
            <div className=" container   w-100 p-4">
                <div className="row">
                    <div className="Shopping-Cart col-8 border">
                        <div className=" search row m-3">
                            <h1 className="col-8">Shopping Cart</h1>
                            <ShoppingCartSearch 
                            filterlistByTitile={filterlistByTitile}
                            filterByTitile={filterByTitile}/>
                        </div>
                        {/* <!-- ////cart shopping/// --> */}
                    
                        <ShoppingCartList 
                        DeleteItem={DeleteItem}
                        decQuantity={decQuantity}
                        addQuantity={addQuantity}
                        ListData={Data} />

                        <button type="button" className="btn btn-light m-4 p-1"><i className="fas fa-directions"></i>  Ceckout</button>
                    </div>
                    {/* <!-- ////cart shopping/// --> */}

                    {/* <!-- summary --> */}
                    <div className="summary col-4 border bg-secondary bg-gradient p-4">
                      <Summary 
                      LastCoast={LastCoast}
                      TOTAL={TOTAL}
                      Quant={Quant} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShoppingCart;