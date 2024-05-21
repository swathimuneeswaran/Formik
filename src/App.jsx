import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./component/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import PageTwo from "./component/PageTwo";
import PageThree from "./component/PageThree";
import { BookProvider } from "./context/TableContext";
import "boxicons/css/boxicons.min.css";


function App() {
  

  return (
    <>
   <BookProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<PageTwo />} />
      <Route path="/addbooks" element={<PageThree />} />
    </Routes>
    </BrowserRouter>
    </BookProvider>


    </>
  )
}

export default App
