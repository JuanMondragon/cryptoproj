import { makeStyles } from '@material-ui/core'
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { CryptoState} from "../../CryptoContext"

import {TrendingCoins} from '../../config/api'



const useStyles = makeStyles((theme)=> ({

    carousel : {
        height:"50%",
        display:"flex",
        alignItems:"center",
    }

}))
const Carousel = () => {
    const [trending, setTrending] = useState([])

const classes =useStyles();

const { currency } = CryptoState ();


/// fetch api using axios install axios if you havent yet///

/// Since its async we must use await axios ///

const fetchTrendingCoins = async () => {
    const {data} = await axios.get(TrendingCoins(currency))

    setTrending(data)
};
/// console log the data to test the arrays coming back 
console.log(trending)

useEffect (() => {
  fetchTrendingCoins();
}, [currency])

  return (
    <div className={classes.carousel}>Carousel</div>
  )
}

export default Carousel