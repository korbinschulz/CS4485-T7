import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Splash from "./pages/splash";
import Callback from "./pages/callback";
import Loading from "./components/loading";
import UC3 from "./Usecase3/frontend/UC3";

function App() {
  return (

      <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Suspense
            fallback={
              <div className="h-screen flex justify-center items-center">
                <Loading />
              </div>
            }
          >
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/callback" element={<Callback />} exact />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/splash" element={<Splash />} />
              <Route path="/" element={<Splash />} /> {/* Default route */}
              <Route path="/UC3/*" element={<UC3 />} />
            </Routes>
          </Suspense>
      </div>

  );
}

export default App;
