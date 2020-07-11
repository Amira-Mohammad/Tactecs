import React from 'react';
import './TargetMarket.css'
import logo from '../../images/logo.png';
function TargetMarket(props) {
    return (
        <div className="h-100 text-center m-auto" >
            TargetMarket


            <div className="firstRow d-flex justify-content-around my-2">
                <div className="targetMarketItem border-danger py-5">
                    <span className="font-weight-bold">Water, wastewater and Infrastructure</span>

                </div>
                <div className="targetMarketItem border-info py-5" >
                    <span className="font-weight-bold">Civil society associations and NGOs</span></div>
                <div className="targetMarketItem border-warning py-5">
                    <span className="font-weight-bold">Solid Waste and Environment</span></div>
                <div className="targetMarketItem border-danger py-5">
                    <span className="font-weight-bold">
                        System dynamics Modeling&Data analysis
                </span>
                </div>
            </div>

            <div className="secondRow d-flex justify-content-around my-2">
                <div className="targetMarketItem border-warning py-5">
                    <span className="font-weight-bold">
                        Assessment and Planning</span></div>
                <div className="targetMarketItem border-danger py-5">
                    <span className="font-weight-bold">
                        Design and Engineering
                </span>
                </div>
                <div className="targetMarketItem border-info py-6">
                    <span className="font-weight-bold">
                        Risk Assessment
                </span>
                </div>
                <div className="targetMarketItem border-warning py-6">
                    <span className="font-weight-bold">
                        Energy
                </span>
                </div>
            </div>

            <div className="thirdRow d-flex justify-content-around my-2">
                <div className="targetMarketItem  border-danger py-6">
                    <span className="font-weight-bold">
                        Urban Development
                </span>
                </div>
                <div className="targetMarketItem border-warning py-5">
                    <span className="font-weight-bold">
                        International Development
                </span>
                </div>
                <div className="targetMarketItem border-danger py-5">
                    <span className="font-weight-bold">
                        Procurement and contracts management
                </span>
                </div>
                <div className="targetMarketItem border-info py-5">
                <span className="font-weight-bold">
                    Management Consulting
                    </span>
                </div>
            </div>
        </div>
    );
}

export default TargetMarket;