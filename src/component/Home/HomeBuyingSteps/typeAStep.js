import React from 'react';
import "../../../scss/home/HomeBuyingSteps/typeAStep.scss";

const TypeAStep = ({
    stepContainerId,
    stepIconContainerId,
    stepDescriptionId,
    stepBrandImgCcontainerId,
    isMobileDevice,
    stepContainerHeight,
    stepDescBlkTCrd,
    stepIcon,
    stepBrandImg,
    stepHeading,
    stepDesc
}) => {

    return (

        <div className="hbs-type-a-container"
            id={stepContainerId}
            style={
                stepContainerHeight ?
                    { minHeight: `${stepContainerHeight}px` }
                    : {}
            }
        >
            <div className="child-a-container">
                <div className="child-a-img-container" id={stepIconContainerId} >

                    <object type="image/svg+xml"
                        className="child-a-img"
                        data={stepIcon}
                    >
                    </object>

                </div>
            </div>

            <div className="child-b-container">
                <div className="child-b-img-container" id={stepBrandImgCcontainerId}>

                    <object type="image/svg+xml"
                        className="child-b-img"
                        data={stepBrandImg}
                    >
                    </object>

                </div>
            </div>

            <div className="child-c-container"
                id={stepDescriptionId}
                style={
                    isMobileDevice ?
                        { top: `${stepDescBlkTCrd}px` }
                        : {}
                }
            >
                <div className="cc-child-a">
                    {
                        stepHeading
                    }
                </div>

                <div className="cc-child-b">
                    {
                        stepDesc
                    }
                </div>
            </div>
        </div>
    )
}

export default TypeAStep;