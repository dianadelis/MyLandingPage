import React from 'react';

//create your first component
export function Card(){
    
    
    return (
        <div className="col-3">
            <div className="card">
                <img className="card-img-top" src="https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary">Find out more</a>
                    </div>
                </div>
            </div>
        </div>
    );
}