import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setprogress] = useState(0);
 
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={progress}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News setprogress={setprogress} apiKey={apiKey}
                  key="general"
                  pageSize={5}
                  country={"in"}
                  category={"general"}
                />
              }
            />
            <Route
              path="/business"
              element={
                <News setprogress={setprogress} apiKey={apiKey}
                  key="business"
                  pageSize={5}
                  country={"in"}
                  category={"business"}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News setprogress={setprogress} apiKey={apiKey}
                  key="sports"
                  pageSize={5}
                  country={"in"}
                  category={"sports"}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News setprogress={setprogress} apiKey={apiKey}
                  key="technology"
                  pageSize={5}
                  country={"in"}
                  category={"technology"}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News setprogress={setprogress} apiKey={apiKey}
                  key="health"
                  pageSize={5}
                  country={"in"}
                  category={"health"}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News setprogress={setprogress} apiKey={apiKey}
                  key="science"
                  pageSize={5}
                  country={"in"}
                  category={"science"}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News setprogress={setprogress} apiKey={apiKey}
                  key="sports"
                  pageSize={5}
                  country={"in"}
                  category={"sports"}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News setprogress={setprogress} apiKey={apiKey}
                  key="entertainment"
                  pageSize={5}
                  country={"in"}
                  category={"entertainment"}
                />
              }
            />
            <Route
              path="/general"
              element={
                <News setprogress={setprogress} apiKey={apiKey}
                  key="general"
                  pageSize={5}
                  country={"in"}
                  category={"general"}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  
}

export default App;