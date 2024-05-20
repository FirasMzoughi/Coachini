import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoachRegistration from "./pages/CoachRegistration";
import ClientRegistration from "./pages/ClientRegistration";
import CoachSignIn from "./pages/CoachSignIn";
import ClientSignIn from "./pages/ClientSignIn";

import "./App.css";
import ClientProfile from "./pages/ClientProfile";
import WritePost from "./pages/WritePost";
import Posts from "./pages/Posts";
import Information from "./pages/Information";
import FindCoach from "./pages/FindCoach";
import UpdateInformation from "./pages/UpdateInformation";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coach-registration" element={<CoachRegistration />} />
        <Route path="/client-registration" element={<ClientRegistration />} />
        <Route path="/coach-signin" element={<CoachSignIn />} />
        <Route path="/client-signin" element={<ClientSignIn />} />
        <Route path="/client-profile" element={<ClientProfile />} /> 
        <Route path="/client-profile/write-post" element={<WritePost/>} /> 
        <Route path="/client-profile/posts" element={<Posts/>} /> 
        <Route path="/client-profile/information" element={<Information/>} /> 
        <Route path="/client-profile/find-coach" element={<FindCoach/>} /> 
        <Route path="/client-profile/update" element={<UpdateInformation/>} /> 
      </Routes>
    </Router>
  );
};

export default App;
