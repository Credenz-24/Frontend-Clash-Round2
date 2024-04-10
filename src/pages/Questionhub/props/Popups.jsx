import React from 'react';
import {useState} from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Hero from '../component/Hero';

function Popups(props) {

  const [buttonPopup, setButtonPopup] = useState(false);

  return (props.trigger) ? (
    <div className='popup fixed w-[350px] h-[500px] z-[1000] bg-purple-500 flex justify-center items-center rounded-[20px]'>
      <div className="popupInner flex justify-center items-center h-[100%] w-[100%] max-w-[640px] rounded-[20px]">
            {/* <button className='close-btn absolute top-[36px] right-[46px] bg-red-400' onClick={() => props.setTrigger(false)}></button> */}
            {setButtonPopup ? <AiOutlineClose size={30} className='close-btn text-white absolute top-[36px] right-[36px]' onClick={() => props.setTrigger(false)}/> : ""}
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popups