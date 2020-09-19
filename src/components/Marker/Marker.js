import React, { useState } from 'react';
import './style.css';

const Marker = (props) => {
  const [isHover,setHover] = useState(false)
  const { color, name, tax } = props;
  const setHoverHandler = isHover => {
    setHover(isHover)
  }
  return (
    <div className="marker" style={isHover? {width:40,height:40} : {width:30,height:30}} onMouseEnter = {()=>setHoverHandler(true)} onMouseLeave = {()=>setHoverHandler(false)}>
        <div className ='name'>{name}</div>
        <div className ='tax'>{tax}</div> 
      </div>
  );
};

  export default Marker;