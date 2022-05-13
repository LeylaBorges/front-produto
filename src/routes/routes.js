import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddUser from "../components/adduser/Adduser";
import ListUser from "../components/listuser/Listuser";

const AppRouter = () =>{
    return(
        <div>
            <Router>
                <div className="col-md-6">
                    <h1 className="text-center" >Sephora Cosmetics</h1>
                    <Routes>
                        <Route path="/" exact element={<ListUser/>}/>
                        <Route path="/add" element={<AddUser/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default AppRouter;