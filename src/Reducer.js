
export const dataReducer = (state = [], action) => {
    switch(action.type) {
        case 'INIT_JSON':
            return action.data

        case 'DELETE_IMAGE':
            return state.filter(item =>
                item.id !== action.id) 
          
        default:
            return state
   }
}

export const pageReducer = (state = 0, action) => {
    switch(action.type) {
        case 'CHANGE_PAGE':
            return action.page
          
        default:
            return state
   }
}


