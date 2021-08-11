import api from "../api/api"
import { useState, useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"


export default function Home(){
    
    const [personagem, setPersonagem] = useState ([]);
    const [idPersonagem, setIdPersonagem] = useState([]);
    const [name, setName] = useState();
    const reducer = useSelector(state => state.homeReducer)
    const dispatch = useDispatch()


    const getPersonagem = (id) => {
        api.get (`/people/${id}`)
            .then((response) => {
                dispatch({
                    type:"GET_PERSONAGEM",
                    payload: response.data
                })
            });
    }

    
        // useEffect(() => {
        //     api.get(`/people/${idPersonagem}`)
        //     .then((response) => {
        //         setPersonagem(response.data)
        //         dispatch({
        //             type: "GET_PERSONAGEM",
        //             payload: response.data
        //         })
        //     });
            
        // }, []);


    return(
        
       
        <div style={{display:"flex", flexDirection:"column"}}>
             <input onChange={(event, type) => {setIdPersonagem(event.target.value) }} />
             <input onClick={()=> getPersonagem(idPersonagem)} type="button" className="btn" value="Search" />
            
            <span>name {reducer.name} </span>
            <span>height {reducer.height} </span>
            <span>mass {reducer.mass} </span>
            <span>gender {reducer.gender} </span>
             

            <h1>SWA: PERSONAGENS ALTERADOS</h1>
          
            <span>name {reducer.name} </span>
            <span>height {reducer.height} </span>
            <span>mass {reducer.mass} </span>
            <span>gender {reducer.gender} </span>

             <input onChange={(event, type) => {setName(event.target.value)}}/>
             <input onClick={()=> dispatch({ type:"ALTER_NAME", payload: {name}})} type="button" value="search" />
            
        </div>
    )
}