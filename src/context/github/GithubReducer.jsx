const githubReducer=(state,action)=>{
  switch(action.type){
    case 'SET_LOADING':
      return{
        ...state,
        loading:true,
    }
    case 'GET_USERS':
        return {
        ...state,
        users:action.payload,
        loading:false,
    }
    case 'CLEAR_USERS':
      return{
      ...state,
      users:[],
      loading:false,
    }
    case 'GET_USER_AND_REPOS':
      return{
        ...state,
        user:action.payload.user,
        userRepos:action.payload.repos,
        loading:false,
      }
    default:return state
  }
}

export default githubReducer