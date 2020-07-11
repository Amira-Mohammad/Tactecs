import React from 'react';
import './Activities.css'
const Activities = () => {
    return (
        <div className="bg-light h-100 text-center" >
            Activities

            <div className="firstRow d-flex justify-content-around my-2">
                <div className="activityItem border-danger py-5">
                    <span className="font-weight-bold">Projects and Construction Management</span>

                </div>
                <div className="activityItem border-info py-5" >
                    <span className="font-weight-bold">Prepare and revise feasibility studies, market studies, and field surveys</span></div>
                <div className="activityItem border-warning py-5">
                    <span className="font-weight-bold">Technical, administrative and institutional assistant</span></div>

            </div>

            <div className="secondRow d-flex justify-content-around my-2">
                <div className="activityItem border-warning py-6">
                    <span className="font-weight-bold">
                        Surveying and Mapping</span></div>
                <div className="activityItem border-danger py-6">
                    <span className="font-weight-bold">
                        Training and event organizing
                </span>
                </div>
                <div className="activityItem border-info py-6">
                    <span className="font-weight-bold">
                        Risk Assessment
                </span>
                </div>

            </div>

            <div className="thirdRow d-flex justify-content-around my-2">
                <div className="activityItem  border-danger py-6">
                    <span className="font-weight-bold">
                        Supplies and procurement
                </span>
                </div>
                <div className="activityItem border-warning py-5">
                    <span className="font-weight-bold">
                        Software and technology solutions
                </span>
                </div>
                <div className="activityItem border-danger py-5">
                    <span className="font-weight-bold">
                        Providing engineering, financial, economic, administrative and accounting consulting
                </span>
                </div>

            </div>
        </div>
    );
};

export default Activities;