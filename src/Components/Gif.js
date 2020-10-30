import React from 'react';

const Gif = props => {
  const handleClick = () => { 
    console.log("worked: " + props.url)  
    window.open(props.url, '_blank', 'noopener,noreferrer');
    navigator.clipboard.writeText(props.url);
  }

  return (
    <li className="gif-wrap">
      <img src={props.url} alt="" onClick={handleClick}/>
    </li>
  )
}


export default Gif;