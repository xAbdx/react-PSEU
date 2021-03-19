import React, { useState } from 'react';
import useStyles from './myInput.style'

const MyInput = (props) => {
    const classes = useStyles();

    ////useState
    const [searchValue, setSearchValue] = useState("");

    ////get SearchValue 
    const handelInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    //// clear function
    const handelClearClick = () => {
        setSearchValue("")
    }

    ////condition display for button
    const shouldDisplayButton = searchValue.length > 0;
    // console.log(shouldDisplayButton) //for testing


    //// filtering products
    const filteredProducts = props.products.filter((product) => {
        return product.includes(searchValue)
    })

    return (
        <div className={classes.myStyle}>
            <input type="text" value={searchValue} onChange={handelInputChange} />
            <br />
            {searchValue}
            {shouldDisplayButton && <button onClick={handelClearClick}>clear</button>}
            <ul>
                {filteredProducts.map((product) => {
                    return <li key={product}>{product}</li>
                })}
            </ul>
        </div>
    )
}

export default MyInput
