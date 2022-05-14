import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddProduto from "../components/AddProduto/AddProduto";
import ListProduto from "../components/ListProdutos/ListProduto";

const AppRouter = () =>{
    return(
        
            <Router>
                <div className="">
                    <h1 className="text-center bg-info" >Sephora Cosmetics</h1>
                    <Routes>
                        <Route path="/" element ={<ListProduto/>}/>
                        <Route path="/add" element={<AddProduto/>}/>
                    </Routes>
                </div>
            </Router>
        
    )
}

export default AppRouter;