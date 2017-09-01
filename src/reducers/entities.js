const initialState = {
    post: {
        title: '',
        content: ''
    },
    posts: {},
    fetching: false,
    error: null
}
export default function entities(state=initialState, action){
  switch(action.type){
      case "FETCH_DETAIL": {
        return { 
            ...state, 
            fetching: true
        }
      }
      case "FETCH_DETAIL_FULFILLED": {
        return {
            ...state, 
            fetching: false,
            saved: false,
            post: action.payload
        }
      }
      case "FETCH_LIST": {
          return { 
            ...state, 
            fetching: true
        }
      }
      case "FETCH_LIST_FULFILLED": {
          return {
            ...state, 
            fetching: false,
            posts: action.payload
        }
      }
      default: 
          return state
  }
}