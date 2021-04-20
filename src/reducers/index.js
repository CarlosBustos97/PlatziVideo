const reducer = (state, action) => { 
//estate siempre tendra la información de la constante initialState que se establecio en el index.js de la raiz src
//action tendra la información del payload que retorna en el componente
    switch(action.type){
        case 'SET_FAVORITE': //Componente carouselItem
            return {
                ...state,
                myList: state.myList.some(item => item.id === action.payload.id) //Condicional para garantizar que no se agreguen items repetidos
                  ? [...state.myList]
                  : [...state.myList, action.payload],
                  //setFavorite información que se le envio en el componente en la funcion setFavorite
              }
            break
        case 'DELETE_FAVORITE': // Componente carouselItem
            return{
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload)
                //deleteFavorite información que se le envio en el componente en la funcion deleteFavorite
            }
        case 'LOGIN_REQUEST': //Componente Login
            return{
            ...state,
            user: action.payload, // setValues información que se le envio en el componente en la funcion setValues
            }
        case 'LOGOUT_REQUEST':
            return{
                ...state,
                user: action.payload,
            }
        case 'REGISTER_REQUEST':
            return{
                ...state,
                user: action.payload,
            }
            case 'GET_VIDEO_SOURCE':
                return{
                    ...state,
                    playing: state.trends.find(item => item.id === Number(action.payload)) 
                    || state.originals.find(item => item.id === Number(action.payload))
                    || []
                }
           
        default:
            return state
    }
}

export default reducer


