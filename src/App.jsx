
import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Instruction from './pages/Instruction';
import Leaderboard from './pages/Leaderboard';
import Result from './pages/Result';
import QuestionHub from './pages/QuestionHub';
import CodingPage from './pages/CodingPage';
import OurTeam from './pages/OurTeam';

const router = createBrowserRouter(
  createRoutesFromElements(
      <>
      <Route path="/" element={<Login />} />
      <Route path="instruction" element={<Instruction/>} />
      <Route path="questionhub" element={<QuestionHub/>} />
      <Route path="leaderboard" element={<Leaderboard/>} />
      <Route path="result" element={<Result/>} />
      <Route path="Ourteam" element={<OurTeam/>} />
      <Route path="codingpage" element={<CodingPage/>} />

     </>
     
  
  )
)

function App({routes}) {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;

