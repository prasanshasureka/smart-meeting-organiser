import "./App.css";
import React, { Suspense } from "react";
import AppRoutes from "./routes";
import Header from "./components/Header/Header";
import {useSelector} from 'react-redux';

function App() {
  const { isLoading } = useSelector((state) => state.master);
  return (
    <Suspense fallback="Loading..">
      <div className="App">
        <Header/>
        <AppRoutes />
      </div>
    </Suspense>
  );
}

export default App;
