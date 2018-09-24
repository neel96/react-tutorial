import React from 'react';
import '../App.css';
import propTypes from 'prop-types';

export class Header extends React.Component{

    constructor(props){
        super();
        this.age = props.age
    }
    onMakeChange(){
        this.age += 3;
        console.log(this.age);
    }
    render(){
        //console.log(this.props);
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="navbar-header center">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item button2"><a className="nav-link" href="#">Login</a></li>
                    <li lassName="nav-item button2"><a className="nav-link" href="./login.js">Signup</a></li>
                    </ul>
                    </div>
                    
                </div>
            </nav>
            <button onClick={this.onMakeChange()} className="button">Click for Age</button>
            <div className="container">
            <p> your name is {this.props.name} and your age is {this.age}</p>
            <ul className="col-sm">
                {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
            </ul>
            <ul className="col-sm">{this.props.children}</ul>

            </div>
            </div>
        );
    }
}



// Header.propTypes = {
//     name : React.PropTypes.string,
//     age : React.PropTypes.number,
//     user : React.PropTypes.object,
//     children : React.PropTypes.element.isRequired
// };


