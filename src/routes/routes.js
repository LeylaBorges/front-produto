import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from "../components/Adduser/Adduser";
import ListProduto from "../components/Listuser/Listuser";

const AppRouter = () =>{
    return(
        <div>
            <Router>
                <div className="container">
                    <h1 className="text-center bg-info mt-3 border p-2" >Sephora Cosmetics</h1>
                    <Routes>
                        <Route path="/" exact element={<ListProduto/>}/>
                        <Route path="/add" element={<AddUser/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default AppRouter;