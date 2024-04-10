import React, { useEffect } from 'react';
import Boxes from '../props/Boxes';
import { useState } from 'react';
import SetQuestions from './SetQuestion';
import Popups from '../props/Popups';
import {axiosAuthInstance, contestId} from "../axios/axios.jsx";



function Hero() {

  const[ques,setques] = useState({});
  const[text,setText] = useState([]);
  const[isError,setIsError] = useState("");

  const [buttonPopup, setButtonPopup] = useState(false);



const getData = async () => {
  try{
    // const res = await axios.get("https://testoj.credenz.in/question/c073d/questions/332b7/");
    const res = await axiosAuthInstance.get(`/question/${contestId}/questions/`);
    setques(res.data);
    // console.log(res.data);
  }
  catch (error) {
    setIsError(error.message);
    // console.log(error);
  }
};

console.log(ques);

useEffect(() => {
  getData();
}, []);


  let display = (id) => { 
    const newDisplay = ques.filter(ques => ques.questionNumber===id);
    console.log(newDisplay);
    setText(newDisplay);
  }



  return (
    <>
    <style>
      {`
        @media only screen and (max-width: 468px) {
          .container {
            /* Your styles for small screens */
            width:100%;
            height:632px;
            overflow:hidden;
            display:flex;
            justify:center;
            items:center;
            background-color:red;
            

          }

          .cont-left {
            /* Your styles for .cont-left on small screens */
            display:flex;
            top:0%;
            background-color:black;
            width:100%;
            height:100%;
            justify:center;
            items:center;
            gap:10px;
            flex-wrap: wrap;
            overflow:hidden;
            padding: 50px 50px;
            
          }

          .cont-right {
            /* Your styles for .cont-right on small screens */
          }
      `}
    </style>
        <div className="container h-[86.5vh] w-full  flex justify-center items-center bg-transparent">
            <div className="cont-left bg-blue- h-[100%] w-[100%] flex justify-center items-center flex-wrap gap-[100px] bg-transparent relative p-[80px]">

              {/* {ques.map((question) => {
                return(
                  <Boxes dis={display} id={question.id} num={question.num} level={question.level}/>
                );
              } )} */}
              {Array.isArray(ques) && ques.map((question) => (
                <Boxes key={question.questionNumber} dis={display} id={question.questionNumber} num={question.questionNumber} level={question.accuracy}/>
              ))}
                {/* <Boxes key={ques.id} dis={display} id={ques.questionNumber} num={ques.questionNumber} level={ques.level}/> */}
            </div>
            <div className="cont-right  w-[30%] h-[100%] flex justify-center items-center bg-transparent max-sm:w-[0%]">
                <div className="bigBox  text-white h-[500px] w-[80%] border-[2px] border-solid border-white rounded-[20px] flex flex-col justify-center items-center max-sm:hidden">
                    
                    <SetQuestions ques={text.filter((text) => text.id)} />
                </div>
            </div>
            {/* <Popups trigger={buttonPopup} setTrigger={setButtonPopup}>
              <SetQuestions ques={text.filter((text) => text.id)} />
            </Popups> */}
        </div>
    </>
  )
}

export default Hero