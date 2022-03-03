import React from 'react';
import "../../../scss/home/HomeBuyingSteps/typeBStep.scss";

const TypeBStep = ({
    isDesktopDevice,
    stepContainerId,
    stepBrandImgCcontainerId,
    stepBrandImgHeight,
    stepIconContainerId,
    descBlkLCord,
    stepDescriptionId,
    stepContainerHeight,
    stepDescBlkTCrd,
    stepIcon,
    stepBrandImg,
    stepHeading,
    stepDesc
}) => {

    return (

        <div className="hbs-type-b-container"
            id={stepContainerId}
            style={
                (stepContainerHeight) ?
                    { minHeight: `${stepContainerHeight}px` }
                    : {}
            }
        >
            <div className="child-a-container">
                <div className="child-a-img-container" id={stepBrandImgCcontainerId}>

                    <object type="image/svg+xml"
                        className="child-a-img"
                        data={stepBrandImg}
                    >
                    </object>

                </div>
            </div>

            <div className="child-b-container"
                style={
                    (isDesktopDevice) ?
                        {}
                        : { minHeight: `${stepBrandImgHeight}px` }
                }
            >
                <div className="child-b-img-container" id={stepIconContainerId}>

                    <object type="image/svg+xml"
                        className="child-b-img"
                        data={stepIcon}
                    >
                    </object>

                </div>
            </div>

            <div className="child-c-container"
                id={stepDescriptionId}
                style={
                    !isDesktopDevice ?
                        { top: `${stepDescBlkTCrd}px` }
                        : { left: `${descBlkLCord}px` }
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

export default TypeBStep;