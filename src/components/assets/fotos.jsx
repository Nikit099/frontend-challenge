import React from 'react'
import full from '../fotos/full.png'
import out from '../fotos/out.png'
function Fotos({catsFotos,  clickFoto}) {
    console.log(catsFotos);
    const overFoto = (e) => {
        e.target.src = full
    }
    const leaveFoto = (e) => {
        e.target.src = out
    }
    
    return (
        <div className='mainFotoContainer' >
            <div className="fotoContainer">
            {catsFotos.map(foto => (
                <div key={foto.id} className='fotoBlock'>
                <img className='foto' src={foto.url} alt='like'  />
                {foto.like ? <img className='heartLike' src={full} onClick={() => clickFoto(foto.like, foto.id)} alt="LikeFoto" /> : <img className='heart' onClick={() => clickFoto(foto.like, foto.id)}  onMouseLeave={leaveFoto} onMouseOver={overFoto} src={out} alt="notLike" /> }
                </div>
            ))}
            </div>
        </div>
    )
}

export default Fotos
