import React from 'react'
import {ImageStyle} from './ImageStyle'
import {NameStyle} from './ImageStyle'


function Card({id , name , image}) {
    return (
        <div  key ={id}>
            
            <ImageStyle src={image} alt={`Candidate ${id}`} />
            <NameStyle>Name : {name}</NameStyle>
        </div>
    )
}

export default Card
