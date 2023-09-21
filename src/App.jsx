import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import Monday from "./pages/monday";
import Tuesday from "./pages/tuesday";
import Wednesday from "./pages/wednesday";
import Thursday from "./pages/thursday";
import Friday from "./pages/friday";
import Nav from "./Components/nav";

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/rutina" element={<HomePage />} />
          <Route path="/monday" element={<Monday />} />
          <Route path="/tuesday" element={<Tuesday />} />
          <Route path="/wednesday" element={<Wednesday />} />
          <Route path="/thursday" element={<Thursday />} />
          <Route path="/friday" element={<Friday />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
