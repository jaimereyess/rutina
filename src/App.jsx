import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import Monday from "./pages/monday";
import Tuesday from "./pages/tuesday";
import Wednesday from "./pages/wednesday";
import Thursday from "./pages/thursday";
import Friday from "./pages/friday";
import ErrorPage from "./error-page";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/monday" element={<Monday />} />
        <Route path="/tuesday" element={<Tuesday />} />
        <Route path="/wednesday" element={<Wednesday />} />
        <Route path="/thursday" element={<Thursday />} />
        <Route path="/friday" element={<Friday />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
