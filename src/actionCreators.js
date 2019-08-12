import {getJSON} from './loadJSON'

export const changePage = page => ({
    type: 'CHANGE_PAGE',
    page
})

export const initializeJSON = () => {
    return async dispatch => {
      const json = await getJSON()
      dispatch({
        type: 'INIT_JSON',
        data: json,
      })
    }
  }

export const deleteImage = id => ({
    type: 'DELETE_IMAGE',
    id
})