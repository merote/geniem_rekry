//Komponetti joka lataa kuvan, joka valittu thumbnails listasta.
//Mahdollisuus myös poistaa kuva tai palata thumbnails näkymään
import React from 'react';
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import {deleteImage, changePage} from './actionCreators'
import Grid from '@material-ui/core/Grid';

//Mapataan reduxin store propseihin
const mapStateToProps = (state) => ({
    page: state.pageReducer,
    data: state.dataReducer
  });

  //Mapataan action propseihin
const mapDispatchToProps = {  
    deleteImage,
    changePage
}


const ThumbImage = (props) => {

    //Kuvakkeiden puolelta parametrina saadun id:een avulla haetaan redux
    //storesta yhden kuvan tiedot
    const imageData = props.data.filter(item => item.id === props.page)[0]

    //Kuvan poisto reduxin storesta ja näkymästä
    const handleDelete = () => {
        props.deleteImage(props.page)
        props.changePage(0)
    }

    //Paluu kuvake näkymään
    const handleClose = () => {
        props.changePage(0)
    }

    return (

        <div align="center">
            <Button variant="contained" size="large" onClick={handleDelete}>
                POISTA KUVA
            </Button>
            <Button variant="contained" size="large" onClick={handleClose}>
                PALAA
            </Button>          
            <Grid container
                direction="column"
                alignItems="center"
                spacing={32}
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                <div>
                    <b>{imageData.title}</b>
                </div>
                <img src={imageData.url} key={imageData.id} alt={imageData.title} />
            </Grid>
        </div>
    )


}

export default connect(mapStateToProps, mapDispatchToProps)(ThumbImage);

//<img src={thumb.thumbnailUrl} key={thumb.id} alt={thumb.title}/>