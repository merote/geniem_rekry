import Thumbnails from './thumbnails.js'
import React from 'react';
import { connect } from 'react-redux'
import ThumbImage from './thumbImage.js';
import  { useEffect } from 'react'
import {initializeJSON} from './actionCreators'



const mapStateToProps = (state) => ({
   page: state.pageReducer  
});

const App = (props) => {
  
  //use-effetc hoitaa reducerin alustuksen asynkronisella datalla
  useEffect(() => {
    props.initializeJSON()
  }, [])
  

  return (
    <div>
      {props.page === 0
        ? <Thumbnails/>         
        : <ThumbImage page = {props.page}/>
      }
    </div>
  )
}

export default connect(mapStateToProps, {initializeJSON})(App);

