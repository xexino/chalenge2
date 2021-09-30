import ShoppingCartList from "./ShoppingCartList"
import ShoppingCartSearch from "./ShoppingCartSearch"
import Summary from "./Summary"
import black from "./img/black.jpg"
import blue from "./img/blue.jpg"
import pink from "./img/pink.jpg"
import Command from "../model/command"
import { useEffect, useState ,useRef} from "react"

const ShoopingCart = () => {

    const [LIST_COMMANDES, setLIST_COMMANDES] = useState(
        [
            new Command(1, "Shirt black", "Cotton T-shirt", black, 44, 1),
            new Command(2, "Shirt blue", "Cotton T-shirt", blue, 44, 1),
            new Command(3, "Shirt pink", "Cotton T-shirt", pink, 44, 1),
        ]
    )

    const addQuantity = (id) => {
        const newList = [...LIST_COMMANDES]

        newList.forEach(c => {
            if (c.id === id) {
                c.quantite++
            }
        })
        setLIST_COMMANDES([...newList])
    }


    const decQuantity = (id) => {
        const newList = [...LIST_COMMANDES]

        newList.forEach(c => {
            if (c.quantite === 0) {
                window.confirm('Are you sure you wish to delete this item?') 
            } else if (c.id === id) c.quantite--
        })
        setLIST_COMMANDES([...newList])
    }

    const handelDelete = (id) => {
        let newList = [...LIST_COMMANDES]
        newList = newList.filter(newList => newList.id !== id)
        setLIST_COMMANDES([...newList])
    }

    const [total, setTotal] = useState(0);

    useEffect(() => {
        Total();
    }, [LIST_COMMANDES]);

    const Total = () => {

        let totalVal = 0;
        LIST_COMMANDES.forEach((c) => {
            totalVal += c.price * c.quantite
        })
        setTotal(totalVal);
    };
   
    const [Quant, setQuant] = useState(0);

    useEffect(() => {
        QuanT();
    }, [LIST_COMMANDES]);

    const QuanT = () => {

        let QuantVal = 0;
        LIST_COMMANDES.forEach((c) => {
            QuantVal +=  c.quantite
        })
        setQuant(QuantVal);
    };

   


    const [ListCommandesBackup, setListCommandesBackup] = useState([
            new Command(1, "Shirt black", "Cotton T-shirt", black, 44, 1),
            new Command(2, "Shirt blue", "Cotton T-shirt", blue, 44, 1),
            new Command(3, "Shirt pink", "Cotton T-shirt", pink, 44, 1),
        ])

    const filterListCommandes = useRef("")
    const filterlistByTitile = () =>{

        let query = filterListCommandes.current.value;
        if(query==="")  setLIST_COMMANDES([...ListCommandesBackup])
        else{
        let newList = [...LIST_COMMANDES]
        newList = newList.filter((c)=>c.title.includes(query))
        setLIST_COMMANDES([...newList])
        }
      }



    return (


        <div className="container card  ">
            {/* <!-- div pour Shopping cart --> */}
            <div className="row ">
                <div className="border col-sm-8 bg-light ">
                    <div className="cart">
                        <div className="d-flex justify-content-around">
                            <h3>Shopping cart</h3>
                            <ShoppingCartSearch 
                            filterlistByTitile={filterlistByTitile}
                            filterListCommandes={filterListCommandes} />
                        </div>
                        <hr />
                        <div className="list-items">

                            <ShoppingCartList
                                onClickDecQuantite={decQuantity}
                                onClickAddQuantite={addQuantity}
                                handelClickDelete={handelDelete}
                                listCommandes={LIST_COMMANDES} />

                        </div>

                        <br />


                        <button type="button" className="btn btn-light">
                            <i className="fas fa-directions"></i>  Back to shop</button>
                    </div>
                    {/* <!-- div pour Shopping cart --> */}
                </div>
                <div className="border col-sm-4 bg-secondary summary">
                    <Summary 
                    Quant={Quant}
                    total={total} />
                </div>
            </div>

            {/* <!-- Div pour summary --> */}

        </div>

    );
}

export default ShoopingCart;