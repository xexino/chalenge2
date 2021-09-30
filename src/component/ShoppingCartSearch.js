const ShoppingCartSearch = ({filterlistByTitile,filterListCommandes}) => {
    return (
        <>
            <input
                    onKeyUp={ filterlistByTitile}
                    ref={filterListCommandes}
                    type="search" 
                    placeholder="search by title" 
                    className="search" />
        </>
    );
}

export default ShoppingCartSearch;