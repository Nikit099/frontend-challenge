import React, { useEffect, useState } from 'react'
import full from '../fotos/full.png'
import out from '../fotos/out.png'

function LikesCats() {
    const [likesFotos, setLikesFotos] = useState([]);
    useEffect(() => {
            if(localStorage.getItem('catsFotos')){
                const allFotos = JSON.parse(localStorage.getItem('catsFotos'))
                const onlyLikes = allFotos.filter(foto => {
                   return foto.like && foto
                })
                setLikesFotos(onlyLikes)
            }
        
    }, []);
    
   
    const overFoto = (e) => {
        e.target.src = full
    }
    const leaveFoto = (e) => {
        e.target.src = out
    }
    
    const clickFoto = (like, id) => {
        const newCatsFotos = likesFotos.map( foto => id === foto.id ? {...foto, like: !like} : {...foto})
          setLikesFotos(newCatsFotos)
          const allFotos =  JSON.parse(localStorage.getItem('catsFotos'))
          const sortAllFotos = allFotos.map(foto => foto.id === id ? {...foto, like: !like} : {...foto})
          localStorage.setItem('catsFotos', JSON.stringify(sortAllFotos))
    }
    return (
        <div className='mainFotoContainer' >
            {likesFotos.length  ? 
            <div className="fotoContainerLike">
            {
                likesFotos.map(foto => (
                    <div key={foto.id} className='fotoBlock'>
                        <img className='foto' src={foto.url} alt='like'  />
                        {foto.like ? <img className='heartLike' src={full} onClick={() => clickFoto(foto.like, foto.id)} alt="LikeFoto" /> : <img className='heart' onClick={() => clickFoto(foto.like, foto.id)}  onMouseLeave={leaveFoto} onMouseOver={overFoto} src={out} alt="notLike" /> }
                    </div>
                ))
            }
            </div>
            : 
            <div className="text">Понравившихся котиков пока нет.</div>
        }
            
            
        </div>
    )
}

export default LikesCats
