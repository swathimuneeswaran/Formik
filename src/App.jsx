import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./component/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import PageTwo from "./component/PageTwo";
import PageThree from "./component/PageThree";

function App() {
  

  return (
    <>
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<PageTwo />} />
      <Route path="/addbooks" element={<PageThree />} />
    </Routes>
    </BrowserRouter>


    </>
  )
}

export default App
