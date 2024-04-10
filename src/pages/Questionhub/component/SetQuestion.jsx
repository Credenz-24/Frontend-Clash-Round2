import React from "react";

const SetQuestions = (props) => {
    const Ques = props.ques;
    // const Title = props.title;
    // const Body = props.body;
    const ID = props.id;

    const waterLevel = props.water;

    return ( 
       <>
        
        {Ques.map((ques) => (
            <div className="ques h-[100%] w-[100%] bg-[#0a082d] rounded-[20px] flex flex-col justify-center items-center p-[2vw] gap-[20px]" key={ques.id}>    
                <h1 className="text-white text-[30px]">{ques.title}</h1>
                <p className="text-white text-center">{ques.body}</p>
                {/* <button className="px-[20px] py-[10px] text-black bg-white rounded-[10px] hover:scale-[1.05] hover:duration-[150ms] hover:bg-[#4973ff] hover:border-none hover:font-semibold hover:text-white" id='ques-btn'>SOLVE</button> */}
                {
                    (waterLevel!=="-100%") ? (<button className="px-[20px] py-[10px] text-black bg-white rounded-[10px] hover:scale-[1.05] hover:duration-[150ms] hover:bg-[#4973ff] hover:border-none hover:font-semibold hover:text-white" id='ques-btn'>SOLVE</button> ) : (<div className="px-[20px] py-[10px] text-black bg-white rounded-[10px] hover:scale-[1.05] hover:duration-[150ms] hover:bg-zinc-700 hover:border-none hover:font-semibold hover:text-white" id='ques-btn'>SOLVED</div> )
                }
            </div>
            ))}
       </>
     );
}
 
export default SetQuestions;