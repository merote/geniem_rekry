//Komponentti, joka hoitaa thumbnails listauksen valintojen mukaan

import { connect } from 'react-redux'
import {changePage} from './actionCreators'
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList'; 

//Mapataan reduxin store propseihin
const mapStateToProps = (state) => ({
    data: state.dataReducer
  });

//Mapataan action propseihin
  const mapDispatchToProps = {  
    changePage
}

const Thumbnails = (props) => {

    //Hooksit
    const [album_id, setAlbum_id] = useState(1) //Valittu Albumi
    const [number_input, setNumber_input] = useState(""); //tekstikentän syöte
    const [album_amount, setAlbum_amount] = useState(1);   //Valittu albumeiden määrä

    //Numeroita saman verran arrayssa kuin albumeiden valittu määrä 
    const numbers = Array.from(Array(parseInt(album_amount)).keys()).map(number => number +1);
    console.log(numbers)

    //Kuvakkeen painalluksesta avautuu uusi sivu/komponentti
    const imageClick = (id) => {       
        props.changePage(id)
    }

    //Albumi painikkeen hallinta
    const handleClick = (id) => () => {
        setAlbum_id(id)
    }

    //tekstikentän syötteen hallinta
    const handleChange = (event) => {
        setNumber_input(event.target.value)
    }

    //Albumeiden määrän hallinta ja tekstikentän nollaus
    const handleSearch = () => () => {
        if (number_input > 100) {
            setAlbum_amount(100)
        } else {
            setAlbum_amount(number_input)  
        }                   
        setNumber_input("")       
    }

    return (
        <div>
            <Grid container direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item >
                    <TextField
                        label="Montako albumia (1-100)"
                        margin="normal"
                        variant="outlined"
                        type="number"
                        error={number_input > 100}
                        value={number_input}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item >
                    <Button variant="outlined" size="large" color="primary" onClick={handleSearch()} >
                        HAE
                    </Button>
                </Grid>
            </Grid>

            <div align = 'center'>           
                {numbers.map((item, i) => (
                    <Button key={i} variant="outlined" color="primary" onClick={handleClick(item)} >
                        {item}
                    </Button>
                ))}
            </div>
            <GridList cols={12} cellHeight = 'auto'>
                {props.data.filter(item => item.albumId === album_id)
                    .map(thumb => (
                        <img src={thumb.thumbnailUrl} key={thumb.id} alt={thumb.title} onClick={() => imageClick(thumb.id)} />
                    ))}
            </GridList>
        </div>
    )


}

export default connect(mapStateToProps, mapDispatchToProps)(Thumbnails);