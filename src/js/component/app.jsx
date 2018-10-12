import React from 'react';
import {NavBar} from './navBar.jsx';
import {Jumbotron} from './jumbo.jsx';
import {Card} from './card.jsx';
import {Footer} from './footer.jsx';


//create your first component
export class App extends React.Component{
    
    render(){
        return (
            <div>
                <NavBar />   
                <Jumbotron/>
                <div className='container'>
                    <div className="row text-center">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>  
                </div>
                <Footer/>
            </div>
        );
    }
}