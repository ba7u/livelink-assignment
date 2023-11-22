import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListPage } from "./pages/list-page";
import { DetailPage } from "./pages/detail-page";
import { LivelinkLogo } from "./components/livelink-logo";

function App() {
  return (
    <div className="container h-full max-w-2xl flex flex-col gap-9 m-auto bg-linen py-9">
      <LivelinkLogo />
      <div className="flex flex-col md:px-16 px-8">
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={ListPage} />
            <Route path="detail/:id" Component={DetailPage} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
