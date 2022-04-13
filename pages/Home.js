import React, {Component} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class Home extends Component {
render() {
        return (
            <>
                <div className = "row col-12 text-center">
                    <h1 className = "display-2" style = {{fontFamily: 'Shrikhand'}}>Bar-4-Bar</h1>
                    <h5>"If you can drink it, We can think it!"</h5>
                    <hr/>
                </div>
                <div className = "container">
                  <div className = "row">
                    <div className = "col-6">
				        <div className = "text-center">
				            <Link to={"/popular"}>
                                <i className ="btn fa fa-martini-glass-citrus icon" style = {{fontSize: 336, marginLeft: 150}}
                                aria-hidden = "true"></i>
                            </Link>
                            <div className ="container" style = {{marginLeft: 30}}>
                                <h1 className = "pd-text" style = {{fontFamily: 'Shrikhand'}}><b>POPULAR&nbsp;DRINKS</b></h1>
                            </div>
                        </div>
                    </div>
                    <div className = "col-6">
                        <div className = "row">
				            <div className ="text-center">
				                <a href="#">
                                    <i className ="btn fa fa-search fa-5x icon" style = {{fontSize: 120}} aria-hidden = "true"></i>
                                </a>
                                <div className ="container">
                                    <h2 className = "search-text" style = {{fontFamily: 'Shrikhand'}}><b>SEARCH</b></h2>
                                </div>
                            </div>
			            </div>
			            <div className = "row">
				            <div className ="text-center">
				                <span className = "fa-stack btn text-center icon" style = {{fontSize: 75}}>
				                    <Link to={"/non"}>
                                        <i className ="fa fa-bottle-droplet fa-stack-1x" data-fa-transform="rotate--30"
                                         aria-hidden = "true" style = {{color: 'Black'}}></i>
                                        <i className ="fa fa-ban fa-stack-2x" style={{color: 'Tomato'}}></i>
                                    </Link>
                                </span>
                                <br/>
                                <div className ="container">
                                <br/>
                                    <h2 className = "na-text" style = {{fontFamily: 'Shrikhand'}}><b>NON-ALCOHOLIC</b></h2>
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

export default Home;