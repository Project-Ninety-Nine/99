import React, {Component} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import axios from "axios";
import { render } from 'react-dom';
import DrinkCard from '../components/DrinkCard';
import {withParams} from '../util/Utilities';
import Header from '../components/Header';

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.drink = this.props.params.drinkID;
        console.log(props);
        this.state = {drink: {}};
    }

    componentDidMount() {
        const DRINK_URL = `https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${this.drink}`;
        const getDrink = async () => {
            await axios.get(DRINK_URL)
                .then(response => {
                    console.log(response)
                    this.setState({drink: response.data.drinks[0]});
                }).catch(err => console.log("Fetch Error: " + err));

        }
        getDrink();
    }

render() {

        let val = "strIngredient";
        let val2 = "strMeasure";
        let displayList = [];

        for(let i = 1; i <=15; ++i)
            if(this.state.drink[val + i] != null && this.state.drink[val + i] != ""){
                let str = "";

                if(this.state.drink[val2 + i] != null && this.state.drink[val2 + i] != "")
                    str += this.state.drink[val2 + i] + " ";

                str += this.state.drink[val + i];
                displayList.push(str);
            }
        return (
            <>
                <br/>
                <br/>
                <div className = "container col mb-3">
                    <Header />
                </div>
                <div className = "container">
                    <div className="col mb-3" >
                        <div className="card h-100 position-relative">
                            <div className="row g-0">
                                <div className = "col-md-4">
                                    <img src={this.state.drink["strDrinkThumb"]} className="recipe-img mx-auto" style = {{borderRadius: 0.25}} alt={this.state.drink["strDrink"]}/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body book-card-details">
                                            <h4 className="card-title book-title">
                                                {this.state.drink.strDrink}
                                                <span className="badge position-absolute top-0 start-0 rounded-pill translate-middle bg-color">
                                                    {this.state.drink.strAlcoholic}
                                                </span>
                                            </h4>
                                        <h5 className="card-subtitle mb-2 text-muted book-author">{this.state.drink.strCategory}</h5>
                                        {
                                            displayList.map((measures) => {
                                                return(
                                                   <p>{measures}</p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
   }
}

const Recipe = withParams(Recipes);
export default Recipe;
