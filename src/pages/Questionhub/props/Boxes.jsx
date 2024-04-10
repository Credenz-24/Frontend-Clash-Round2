import React from "react";
import Popups from "./Popups";
import { useState } from "react";
import Hero from "../component/Hero";
import SetQuestions from "../component/SetQuestion";
import funcStatus from "../component/Hero";
// import goldCoinImage from "./public/gold coin.png";

const Boxes = (props) => {
    let ID = props.id;
    let quesNum =props.num;
    let display = props.dis;
    let waterLevel = props.level;

//   const {ques,text,setText,isPending, error} = useFetch('http://localhost:8000/questions');
const[ques,setques] = useState([
    {title:'Text 1', body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',id:1 },
    {title:'Text 2', body:'t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',id:2 },
    {title:'Text 3', body:'Contrary to popular belief, Lorem Ipsum is not simply random text.',id:3 },
    {title:'Text 4', body:'Lorem Ipsum is not simply random text.',id:4 },
    {title:'Text 5', body:'Contrary to popular belief',id:5},
    {title:'Text 6', body:'Last Question Descriptoin',id:6}
  ]);

  const[text,setText] = useState([]);


    const [buttonPopup, setButtonPopup] = useState(false);
    // const[text,setText] = useState([]);
    
    
    let Display = (id) => { 
        const newDisplay = ques.filter(ques => ques.id===id);
        console.log(newDisplay);
        setText(newDisplay);
      }


    const waveStyles = {
        position: 'absolute',
        width: '600px',
        height: '600px',
        top: waterLevel,
        left: '50%',
        background: '#fff',
        backgroundColor: '#4973ff',
        zIndex: '-1',
        borderRadius: '45%',
        animation: 'animate 10s linear infinite',
    };
    if (window.innerWidth <= 468) {
        waveStyles.width = '300px';
        waveStyles.height = '300px';
        waveStyles.borderRadius = '40%';
    }

    const waveAfterStyles = {
        position: 'absolute',
        width: '600px',
        height: '600px',
        top: waterLevel,
        left: '50%',
        background: 'rgba(0,0,0,0.5)',
        zIndex: '99',
        borderRadius: '40%',
        animation: 'animate 10s linear infinite',
    };
    if (window.innerWidth <= 468) {
        waveAfterStyles.width = '300px';
        waveAfterStyles.height = '300px';
        waveAfterStyles.borderRadius = '40%';
    }

    const waveBeforeStyles = {
        position: 'absolute',
        width: '600px',
        height: '600px',
        top: waterLevel,
        left: '50%',
        background: 'rgba(0,0,0,1)',
        zIndex: '1',
        borderRadius: '45%',
        animation: 'animate 10s linear infinite',
    };
    if (window.innerWidth <= 468) {
        waveBeforeStyles.width = '300px';
        waveBeforeStyles.height = '300px';
        waveBeforeStyles.borderRadius = '45%';
    }


    return ( 
        
        
        <>
            <style>
                {`
                    @keyframes animate {
                        0% {
                            transform: translate(-50%, -70%) rotate(0deg);
                        }
                        100% {
                            transform: translate(-50%, -70%) rotate(360deg);
                        }
                    }

                     @media only screen and (max-width: 468px) {
            
                        .bigBox {
                          /* Your styles for .bigBox on small screens */
                        }

                        .box{
                            width:125px;
                            height:120px;
                            z-index:;
                        }

                        .wave{
                            position: absolute;
                            width: 100px;
                            height: 100px;
                            top: waterLevel;
                            left: 50%;
                            background: #fff;
                            backgroundColor:#4973ff;
                            zIndex: -1;
                            borderRadius:45%;
                        }
                        .popups {
                            display: none; // Hide the Popups component on small screens
                            transition: all linear 1000ms;
                            
                        }
                      }
                `}
            </style>
            <div className="box h-[13vw] w-[14vw]  font-semibold border-[1px] border-solid border-[#424242] relative overflow-hidden rounded-[20px] flex justify-center items-center cursor-pointer z-[100] bg-[#4973ff]  max-sm:py-[50px] " onClick={() =>{
                    Display(ID);
                    display(ID);
                    console.log("working");
                    setButtonPopup(true); 
                    console.log(setButtonPopup);
                }}>
                {/* <img className="h-[60px] w-[60px] z-[1000] rounded-[0%] absolute bottom-[10px] lefts-[10px] transition translate-y-3 coinAnime" src="../treasure-chest.png" alt="" /> */}

                {/* <img className="h-[30px] w-[30px] z-[1000] rounded-[0%] absolute bottom-[10px] right-[35px] transition translate-y-3 coinAnime" src="../coinstack.png" alt="" /> */}
                

                {
                    waterLevel !== "-100%" ? (

                        <>
                            <img className="h-[60px] w-[60px] z-[1000] rounded-[0%] absolute bottom-[5px] lefts-[10px] transition translate-y-3 coinAnime" src="../public/asset-img/treasure-chest.png" alt="" />
                            <img className="h-[30px] w-[30px] z-[10] rounded-[0%] absolute bottom-[12px] right-[0px] transition translate-y-3 coinAnime" src="../public/asset-img/key1.png" alt="" />
                        </>
                        ) : (
                            <>
                                <img className="h-[60px] w-[60px] z-[1000] rounded-[0%] absolute bottom-[10px] lefts-[10px] transition translate-y-3 coinAnime" src="../public/asset-img/treasure-chest open.png" alt="" />
                                <img className="h-[60px] w-[60px] z-[1000] rounded-[0%] absolute bottom-[0px] right-[15px] transition translate-y-3 coinAnime" src="../public/asset-img/stack-of-coins.png" alt="" />
                            </>
                        )
                }
                {/* <img className="h-[50px] w-[50px] z-[10] bg-transparent rounded-[0%] absolute bottom-[5px] right-[10px] transition translate-y-3 coinAnime" src="../seaweed new.gif" alt="" /> */}
                <h1 className='Qname text-white text-[30px] z-[999] text-center'>Q{quesNum}</h1>
                <div className="wave relative w-[100%] h-[100%] z-[98] flex justify-center items-center" style={waveStyles}>
                </div>
                <div className="wave" style={waveAfterStyles}></div>
                <div className="wave" style={waveBeforeStyles}></div>

            </div>
            {/* <Popups trigger={buttonPopup} setTrigger={setButtonPopup} className="popups">
              <SetQuestions ques={text.filter((text) => text.id)} />
            </Popups> */}
            {window.innerWidth <= 468 && (
                <Popups trigger={buttonPopup} setTrigger={setButtonPopup} className="popups md:hidden">
                    <SetQuestions water={waterLevel} ques={text.filter((text) => text.id)} />
                </Popups>
            )}
        </>
     );
}
 
export default Boxes;