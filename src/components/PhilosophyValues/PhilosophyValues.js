import React from 'react';
import relationship from '../../images/relationship.jpg';
import commitment from '../../images/commitment.jpg';
import Knowledge from '../../images/knowledge.jpg';
import Learning from '../../images/learning.png';
const PhilosophyValues = () => {
    return (
        <div className="h-100 text-center" >
            PhilosophyValues
            <div className="d-flex " >
                <div class="card mx-2" >
                    <img src={relationship} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <div className="font-weight-bold">Relationships</div>
                        <p class="card-text">
                            Connect, enrich, and deepen relations Build long-term relationships of trust.
                        </p>
                    </div>
                </div>
                <div class="card mx-2" >
                    <img src={commitment} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <div className="font-weight-bold">Commitment</div>
                        <p class="card-text">
                            Fulfill responsibilities Commitment to civil society Committed to community and work ethics.
                        </p>
                    </div>
                </div>

                <div class="card mx-2" >
                    <img src={Learning} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <div className="font-weight-bold">Learning and Growth</div>
                        <p class="card-text">
                            Development of our capabilities Create opportunities for career growth.
                        </p>
                    </div>
                </div>




                <div class="card mx-2" >
                    <img src={Knowledge} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <div className="font-weight-bold">Knowledge</div>
                        <p class="card-text">
                            Support research and development Enhance quality and sustainability Deliver innovative solutions Knowhow for all.
                        </p>
                    </div>
                </div>


            </div>



        </div>

    );
};

export default PhilosophyValues;