import React from 'react';

export default function Image(props){
    return (
        <img width="100%" src={props.src} alt={props.alt}/>
    )
}