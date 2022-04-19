import React, {Component} from 'react';
import axios from 'axios';
import DrinkCard from '../components/DrinkCard';
import Header from "../components/Header";
import '../App.css';

class Search extends Component {
constructor(props){
	super(props);
}

render() {
        return (
        <>
            <br/>
            <Header />
            <br/>
            <div className="row row-cols-sm-2 row-cols-md-3 row-cols-xxl-6">

            </div>
        </>
        );
    }
}
export default Search;