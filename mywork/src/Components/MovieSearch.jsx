import { useRef } from 'react';
import { useState } from 'react';
import axios from 'axios'

export default function MovieSearch (){
    const urlKey = '67cf881186949f317a95d03925490b92'
    const inputElement = useRef();

    const Search = async () => {
        
        const myValue = inputElement.current.value
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${urlKey}&query=${myValue}`;
        try{
            const res = await axios.get(url);
            console.log(res)
            
        
        }
        catch(e){
            console.log("error")
        }
        
    }


        

    return(
        <div>
            <input type="text" placeholder="search for movie here"  ref={inputElement}></input>
            <button onClick={Search}>Search</button>
        </div>
    )
}