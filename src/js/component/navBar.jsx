import React from 'react';

//create your first component
export function NavBar(){
    
    
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#"> Start Bootstrap</a>
                        <div className="ml-auto">
                            <a className="active" href="#"> Home </a>
                            <a className="" href="#"> About </a>
                            <a className="" href="#"> Services </a>
                            <a className="" href="#"> Contact </a>
                        </div>
                    </div>
                </nav>
            </div>
        );
}
