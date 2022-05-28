import axios from 'axios';
import React, { useEffect,  useState } from 'react'
import Fotos from '../assets/fotos';

function AllCats() {
  
    const [catsFotos, setCatsFotos] = useState([]);
    useEffect(() => {
        getFotos()
       
    }, []);

    const clickLike = (like, id) => {
        const newCatsFotos = catsFotos.map( foto => {
            return  id === foto.id ? {...foto, like: !like} : {...foto}
          })
        setCatsFotos(newCatsFotos)
          localStorage.setItem('catsFotos', JSON.stringify(newCatsFotos))
    }
    const  getFotos = async ()  => {
        if(localStorage.getItem('catsFotos')){
            setCatsFotos(JSON.parse(localStorage.getItem('catsFotos')))
        }else{
            const res = await axios.get('https://api.thecatapi.com/v1/images/search?limit=15&page=100&order=DESC')
            setCatsFotos([ ...res.data])
            localStorage.setItem('catsFotos', JSON.stringify([...res.data]))
            console.log();

        }
    }
    
    if(catsFotos.length < 0){
        return <h1>Загрузка котиков</h1>
    }
    return (
        <div>
            
            <Fotos clickFoto={clickLike}  catsFotos={catsFotos} />
           
        </div>
    )
}

export default AllCats
