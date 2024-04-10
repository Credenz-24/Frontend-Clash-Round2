import React, { useState, useEffect } from "react";
import axios from 'axios';
// import { useForm, SubmitHandler } from "react-hook-form"
import "./Login.css";

const Login = () => {

  const [showLabelUser, setShowLabelUser] = useState(false);
  const [showLabelPass, setShowLabelPass] = useState(false);
  const handleInputFocus1 = () => {
    //setShowUnderline(true); // Show the underline when input is focused
    setShowLabelUser(true);
    // document.getElementById("userInput").classList.add("animated-placeholder");
    // document.getElementById("userUnderline").classList.add("active");
  };

  const handleInputFocus2 = () => {
   // setShowUnderline(true); // Show the underline when input is focused
    setShowLabelPass(true);
    // document.getElementById("passInput").classList.add("animated-placeholder");
    // document.getElementById("passUnderline").classList.add("active");
  };

  const handleInputBlur1 = () => {
    //setShowUnderline(false); // Hide the underline when input loses focus
    // Hide the label when input loses focus and its value is empty
    if (userId === "") {
      setShowLabelUser(false);
    }
  //   document.getElementById("userInput").classList.remove("animated-placeholder");
  //   document.getElementById("userUnderline").classList.remove("active");
  };

  const handleInputBlur2 = () => {
    // setShowUnderline(false); // Hide the underline when input loses focus
    // Hide the label when input loses focus and its value is empty
    if (password === "") {
      setShowLabelPass(false);
    }
    // document.getElementById("passInput").classList.remove("animated-placeholder");
    // document.getElementById("passUnderline").classList.remove("active");
  };

  const createRipple = (event) => {
    if (window.innerWidth > 468) {

    const rippleContainer = event.currentTarget;
    const rect = rippleContainer.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height) * 0.1; // Adjust the factor as needed
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = "ripple";

    // Set z-index based on screen width
    // ripple.style.zIndex = window.innerWidth <= 640 ? "-1" : "auto";

    rippleContainer.style.position = "relative";
    rippleContainer.style.overflow = "hidden";

    rippleContainer.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 2000); // Duration should match the CSS animation
  }
  };

  const [loginType, setLoginType] = useState("individual"); // 'individual' or 'team'
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginTypeChange = (event) => {
    setLoginType(event.target.value);
    console.log(event.target.value)
  };

  // const handleLogin = (event) => {
  //   event.preventDefault();
  //   console.log({userId, password});
  
  //   const loginData = {
  //     teamname: userId,
  //     password: password,
  //   };

  //   axios.post('http://localhost:8000/api/login', loginData)
  //   .then(
  //     (res) => console.log(res)

  //     document.cookie = `jwt=${res.data.jwt}`;
  //   )
  //   .catch((err) => console.log(err.response.data.detail))



  // };
  
  const handleLogin = (event) => {
    event.preventDefault();
    console.log({ userId, password });
  
    const loginData = {
      teamname: userId,
      password: password,
    };
  
    axios.post('http://localhost:8000/api/login',loginData ,{ withCredentials: true })
      .then((res) => {
        console.log(res);
        // Assuming the token is in res.data.token
        // Set a cookie that expires in 1 hour
        // Redirect or update UI as necessary
      })
      .catch((err) => console.log(err.response ? err.response.data.detail : err.message));
  };
  


  return (
    
    
    <div
      // className="h-screen items-center flex md:flex-row sm:flex-col text-center flex-col bg-black"
      className="items-center h-[100vh] flex md:flex-row sm:flex-col text-center flex-col bg-black"

      onClick={createRipple}
      
    >
      {/* <img src={wave} className="z-[-100] h-full w-full" alt="Wave SVG" /> */}
      <div className="w-3/5 text-center justify-center items-center ">
        <h1 className="lg:text-7xl md:text-5xl sm:text-6xl text-white italic">
          Credenz '24
        </h1>
        <h1 className="lg:text-9xl md:text-6xl sm:text-8xl text-white">
          Clash
        </h1>
      </div>
      <div className="md:w-[60%] h-screen sm:bottom-10 sm:flex sm:place-items-center sm:items-center justify-center sm:ml-12 md:ml-12 lg:ml-0">
      
      {/* <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]"> */}
 
      
    

      <div className="mt-0 sm:mt-6 bg-black md:mt-5 lg:mt-5 xl:mt-0 2xl:mt-0 md:w-[60%] sm:bottom-10 sm:flex sm:place-items-center sm:items-center justify-center sm:ml-12 md:ml-12 lg:ml-0">
        {/* <EvervaultCard text="hover" handleLogin = {handleLogin}/> */}
        
        <form
          onSubmit={handleLogin}
          // className="mt-0 flex z-10 md:absolute sm:absolute md:w-[370px] sm:w-[340px] md:h-3/4 flex-col p-8 bg-opacity-60 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl border border-gray-100 gradient-shadow"
          className="mt-12 h-[500px] xl:mb-20 sm:mt-6 md:mt-20 lg:mt-20 xl:mt-20 2xl:mt-20 flex z-10 md:w-[370px] sm:w-[340px] flex-col p-8 bg-opacity-60 rounded bg-clip-padding backdrop-filter backdrop-blur-xl border border-gray-100 gradient-shadow"
        >
        <div className="h-[80%] ">
          <h1 className="text-white justify-center text-center items-center text-4xl mb-3">
            Login
          </h1>
          <div className="flex flex-col ml-9 -translate-x-4 space-y-7 mb-5 mt-5">
          {showLabelUser && ( // CondiUsertionally render the label
              <label className="text-xs  absolute mt-2 text-white">
                {loginType === "individual" ? "Username" : "Team ID"}
              </label>
          )}
            {/* <label className="absolute mt-2 text-white">{loginType === "individual" ? "Username" : "Team ID"}</label> */}
            <input
              id="username"
              className="flex border border-3 border-white pl-2 items-center bg-black text-gray-200 rounded py-2 placeholder:bg-black outline-none focus:border-white focus:border-b-4 h-10"
              type="email"
              placeholder={showLabelUser ? "" : loginType === "individual" ? "Username" : "Team ID"}
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              onFocus={handleInputFocus1}
              onBlur={handleInputBlur1}
              
            />
            </div>
            <div className="flex flex-col -translate-x-4 ml-9 space-y-7">
            {showLabelPass && ( // CondiUsertionally render the label
              <label className="text-xs animate-move absolute mt-2 text-white">Password</label>
            )}
              {/* <label className="absolute mt-2 text-white">Password</label> */}
              <input
                id="password"
                className="rounded pl-2 border border-3 py-2 bg-black text-gray-200 outline-none placeholder:bg-black focus:border-white focus:border-b-4 h-10"
                type="password"
                placeholder={showLabelPass ? "" : "Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={handleInputFocus2}
                onBlur={handleInputBlur2}
              />
            </div>
            <div>

            <div role="radiogroup" className="flex mt-12 ml-6 flex-col space-y-6">
              <div className="flex items-center">
                <div className="bg-white dark:bg-gray-100 rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                  <input
                    value="individual"
                    checked={loginType === "individual"}
                    onChange={handleLoginTypeChange}
                    aria-labelledby="label2"
                    type="radio"
                    name="radio"
                    className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-collapse"
                  />
                  <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1"></div>
                </div>
                <label
                  id="label2"
                  className="text-2xl ml-2 leading-4 font-normal text-gray-800 dark:text-gray-100"
                >
                  Individual
                </label>
              </div>

              <div className="flex items-center">
                <div className="bg-white dark:bg-gray-100 rounded-full w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                  <input
                    value="team"
                    checked={loginType === "team"}
                    onChange={handleLoginTypeChange}
                    aria-labelledby="label1"
                    type="radio"
                    name="radio"
                    className="checkbox appearance-none focus:opacity-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                  />
                  <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1"></div>
                </div>
                <label
                  id="label1"
                  className="ml-2 text-2xl leading-4 font-normal text-gray-800 dark:text-gray-100"
                >
                  Team
                </label>
              </div>
            </div>

          </div>
          </div>

          {/* <div className="flex justify-center xl:pt-12  pt-0"> */}
          <div className="relative">            
            <button
              onClick={handleLogin}
              type="button"
              // className="lg:mt-6 xl:mt-0 over:animate-pulse text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-7 py-3.5 dark:bg-blue-900 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              className="lg:mt-6 wavy-btn xl:mt-0 text-white font-medium rounded-lg text-xl px-7 py-3.5 dark:bg-blue-900 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"

            >
              Login
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
    
    
  );
};

export default Login;




