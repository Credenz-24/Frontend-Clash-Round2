// import { AxiosInstance } from './AxiosConfig';

// export const setToken = (userToken) =>{
//     localStorage.setItem("token",userToken);
// }


// export const getToken = () =>{
//     const token = localStorage.getItem("token");
//     if (token !== null){
//         return token;
//     }
//     return token;
// }


// export const isTimeOver =()=>{

//    var countDown;
//     const now = new Date().getTime();

//     AxiosInstance.get("/api/gettime/")
//             .then((response) => {
                
//                 countDown = new Date(response.data[0].endTime).getTime();
                
//             })
//             .catch((error) => {
                
//                 console.log("enter in error ",error);

//             });

    
//     // console.log(new Date())
//     var remain = countDown - now;
//     console.log("timeisover ",remain); 
//     if (parseInt(remain) < 0){
//       return true;
//     }else{
//         return false;
//     }
//   }