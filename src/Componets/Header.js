import React from 'react'
import {AppBar, Container, MenuItem, Toolbar, Typography, Select, makeStyles, createTheme, ThemeProvider} from "@material-ui/core" 
import {useNavigate} from "react-router-dom"
const useStyles = makeStyles(() => ({
  title: {
    flex:1,
    color: "gold",
    fontFamily:"Montserrat",
    fontWeight:"Bold",
    cursor:"pointer",
  }
}))
const Header = () => {
  const classes =useStyles()
  const navigate = useNavigate();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main:"#fff",

      },
      type:"dark",
     
    },
    
  })
  return (
    <ThemeProvider theme={darkTheme}>

    
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography 
          onClick={() => navigate("/")} 
          className={classes.title}
          variant='h5'>YES HELLO
          
          </Typography>
          <Select
          variant='outlined'
          style={{
            width:100,
            height:40,
            marginRight:15,
          }}>
            <MenuItem value={"usd"}>USD</MenuItem>
            <MenuItem value={"inr"}>INR</MenuItem>
          </Select>
        </Toolbar>

      </Container>

    </AppBar>
    </ThemeProvider>
  )
}

export default Header