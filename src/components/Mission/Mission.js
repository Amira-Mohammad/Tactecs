import React from 'react';
import './Mission.css'
import logo from '../../images/logo.png';

function Mission(props) {
    return (
        <div className="Content h-100 text-center d-flex justify-content-around">
            <div className="mission m-auto">
                <div className="missionTitle font-weight-bold text-secondary">Our Mission</div>
                <div>
                Technical assistant to accomplish goals and promote competence.
                </div>
            </div>
            <div className="logo m-auto">
            <img src={logo} width="100" height="100" />
            </div>
            <div className="vission m-auto">
                <div className="vissionTitle font-weight-bold text-secondary ">Our Vission</div>
                <div>
                    A regional hub for knowledge transfer and technical assistant.
            </div>
            </div>
        </div>
    );
}

export default Mission;