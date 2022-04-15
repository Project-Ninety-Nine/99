import './App.css';
import Home from "./pages/Home";
import DrinkList from "./pages/Drinks";
import NonList from "./pages/Non";
import Recipe from "./pages/Recipe";
import Search from "./pages/Search";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

function App(){

	return (
	<>
		<Router>
            <div className = "container">
                <div className="row">
                    <div className="col-12">
                        <Routes>
                            <Route exact path="/" element = {<Home />}/>
                            <Route path="/popular" element={<DrinkList />}/>
                            <Route path="/non" element={<NonList />}/>
                            <Route path="/popular/:drinkID" element={<Recipe />}/>
                            <Route path="/search" element={<Search />}/>
                        </Routes>
                    </div>
                </div>
            </div>
		</Router>
	</>
	);

}

export default App;