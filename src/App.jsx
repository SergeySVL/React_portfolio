import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Education } from "./pages/Education";
import { Projects } from "./pages/Projects";
import { Services } from "./pages/Services";
import { NotFound } from "./pages/NotFound";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route index element={<About />}/>
          <Route index element={<Contact />}/>
          <Route index element={<Education />}/>
          <Route index element={<Projects />}/>
          <Route index element={<Services />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
