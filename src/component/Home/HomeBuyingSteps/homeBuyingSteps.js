import React, { useEffect, useMemo, useState } from 'react';
import window from 'global';

import { fields } from './../../Utils/stepsData';

import "../../../scss/home/HomeBuyingSteps/homeBuyingSteps.scss";

import StepAIcon from "./../../../assets/static/images/home/step_a_icon.svg";
import StepABrandImg from "../../../assets/static/images/home/step_a_img.svg";

import StepBIcon from "./../../../assets/static/images/home/2-1.svg";
import StepBBrandImg from "../../../assets/static/images/home/2-Main.svg";

import StepCIcon from "./../../../assets/static/images/home/3.svg";
import StepCBrandImg from "../../../assets/static/images/home/3-Main.svg";

import TypeAStep from './typeAStep';
import TypeBStep from './typeBStep';

function debounceFunc(expensiveFunc, delay) {

    var timer;

    return function () {
        var ctx = this;
        var args = arguments;

        clearTimeout(timer);

        timer = setTimeout(function () {
            expensiveFunc.apply(ctx, args);
        }, delay)
    }
}

const HomeBuyingSteps = () => {
    /**
     * DESC_BLK_MGN_TOP: Description block margin top
     */
    const DESC_BLK_MGN_TOP = 35;

    const [stepIcons] = useState([StepAIcon, StepBIcon, StepCIcon]);

    const [stepBrandImages] = useState([StepABrandImg, StepBBrandImg, StepCBrandImg]);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [isDesktopDevice, setDesktopDevice] = useState(false);

    const [isMobileDevice, setMobileDevice] = useState(false);

    const [stepContainers] = useState(fields.Steps.map(stepsConf => stepsConf.id));

    const [typeBStepCntrs] = useState(fields.Steps.filter((stepsConf, idx) => (idx % 2 !== 0) ? true : false));

    const stepContainersConf = useMemo(() => {

        let tempObj = {};

        stepContainers.forEach((contrUniqueId, index) => {
            tempObj[contrUniqueId] = {
                'containerId': `hbs-step-${index}-cntr`,
                'brandImgContainerId': `hbss-${index}-brand-img-cntr`,
                'iconContainerId': `hbss-${index}-icon-cntr`,
                'stepDescriptionId': `hbss-${index}-child-c-cntr`,
                'stepTitle': 'A Fast, Reliable Process',
                'stepDesc': 'By closing day, any and all paperwork needed to facilitate a smooth closing can be easily accessed through your titlegenius account. We\’ll guide you and your real estate agent through the process, step-by-step, so you can close with confidence.'
            }
        });

        return tempObj;

    }, []);

    /**
     * upStepCntrConf: Updated Step container configuration
     */
    const [upStepCntrConf, setUpStepCntrConf] = useState(

        stepContainers.reduce((finalObj, item, idx) => {

            finalObj[item] = 'auto';

            return finalObj
        }, {})
    );

    /**
     * upTypeBStepCntrConf: Updated Type-B Step container configuration
     */
    const [upTypeBStepCntrConf, setUpTypeBStepCntrConf] = useState(

        typeBStepCntrs.reduce((result, stepConf, idx) => {

            result[stepConf.id] = 'auto';

            return result;
        }, {})
    );

    const windowResizeHandler = debounceFunc(
        () => {
            setWindowWidth(window.innerWidth);
        }, 500
    );

    useEffect(() => {

        window.addEventListener('resize', windowResizeHandler);

        return () => {

            window.removeEventListener('resize', windowResizeHandler);
        }
    }, []);

    useEffect(() => {
        let btnRendReset;

        /**
         * Before subsequent request, `btnRendReset`
         * need to get cleared.
         */
        clearTimeout(btnRendReset);

        btnRendReset = setTimeout(() => {
            setMobileDevice(false);
        }, 0);

        /**
         * Once the component gets unmount, `btnRendReset`
         * need to get cleared.
         */
        return () => {

            clearTimeout(btnRendReset);
        }

    }, [windowWidth]);

    /**
     * A. useEffect is used to update height of h6 element with class `cccb-child-a` i.e.
     * [h6.cccb-child-a] on ./titleGeniusPros.js file.
     * 
     * B. Height of elements having ID ['child-a-ctrl', 'child-b-ctrl', 'child-c-ctrl']
     * would get updated in case of Desktop rendering only.
     * 
     * C. Updated height would be the maximum among elements having ID 
     * ['child-a-ctrl', 'child-b-ctrl', 'child-c-ctrl']
     */
    useEffect(() => {

        /**
         * When component is getting render on Mobile, then only we need
         * to set Individual Step container height dynamically (To avoid
         * step description block being overlapped with below Step container)
         */
        if (window.innerWidth >= 768 || stepContainers.length == 0) {

            return
        }

        /**
         * stepContHeight: Button Alignment Desktop
         */
        let stepContHeight;

        /**
         * Before subsequent request, `stepContHeight`
         * need to get cleared.
         */
        clearTimeout(stepContHeight);

        stepContHeight = setTimeout(() => {

            /**
             * uStepCntrConf: Updated step container configuartion.
             */
            let uStepCntrConf = {};
            stepContainers.forEach((step) => {

                let brandImgContainerId = stepContainersConf[step]['brandImgContainerId'];
                let stepDescId = stepContainersConf[step]['stepDescriptionId'];

                let brandImgHeight = document.getElementById(`${brandImgContainerId}`).clientHeight;

                /**
                 * descBlkHeight: Description Block height
                 */
                let descBlkHeight = document.getElementById(`${stepDescId}`).clientHeight;

                /**
                 * uTopCrdDescBlock: Updated Top coordination of description block.
                 * uContainerHeight: Updated height of each steps container.
                 */
                uStepCntrConf[step] = {};
                uStepCntrConf[step]['brandImageHeight'] = parseInt(brandImgHeight);
                uStepCntrConf[step]['uContainerHeight'] = parseInt(brandImgHeight) + DESC_BLK_MGN_TOP + parseInt(descBlkHeight);
                uStepCntrConf[step]['uTopCrdDescBlock'] = parseInt(brandImgHeight) + DESC_BLK_MGN_TOP;

            });

            setUpStepCntrConf({ ...uStepCntrConf });
            setMobileDevice(true);

        }, 0);

        /**
         * Once the component gets unmount, `stepContHeight`
         * need to get cleared.
         */
        return () => {
            clearTimeout(stepContHeight);
        }

    }, [windowWidth]);

    useEffect(() => {

        let btnRendReset;

        /**
         * Before subsequent request, `btnRendReset`
         * need to get cleared.
         */
        clearTimeout(btnRendReset);

        btnRendReset = setTimeout(() => {


            let uDescBlkLCords = {};
            typeBStepCntrs.forEach((step) => {

                uDescBlkLCords[step.id] = {};
                uDescBlkLCords[step.id]['left'] = 0;
            });

            setUpTypeBStepCntrConf({ ...uDescBlkLCords });
            setDesktopDevice(false);
        }, 50);

        /**
         * Once the component gets unmount, `btnRendReset`
         * need to get cleared.
         */
        return () => {

            clearTimeout(btnRendReset);
        }

    }, [windowWidth]);

    useEffect(() => {

        /**
         * When component is getting render on mobile device then left coordinate of 
         * `Step Description block` of  would be ZERO always, therefore, no need to
         * calcluate left coordinate dynamically.
         * 
         * OR
         * 
         * When Array that contains `Type-B Step component` information length is ZERO,
         * simply return.
         */
        if (window.innerWidth < 768 || typeBStepCntrs.length == 0) {

            return
        }

        /**
         * descBlkLCord: Description block left coordinate
         */
        let descBlkLCord;

        /**
         * Before subsequent request, `descBlkLCord`
         * need to get cleared.
         */
        descBlkLCord = setTimeout(() => {

            /**
             * uDescBlkLCords: Updated description block left coordinates
             */

            let uDescBlkLCords = {};
            typeBStepCntrs.forEach((step) => {

                /**
                 * descBlkId: Description block id
                 */
                let descBlkId = stepContainersConf[step.id]['iconContainerId'];

                /**
                 * getDescBlkLCord: Get description block left coordinate
                 */
                let getDescBlkLCord = document.getElementById(`${descBlkId}`).getBoundingClientRect().left;

                uDescBlkLCords[step.id] = {};
                uDescBlkLCords[step.id]['left'] = getDescBlkLCord;
            });

            let uStepCntrConf = {};

            stepContainers.forEach((step) => {

                let brandImgContainerId = stepContainersConf[step]['brandImgContainerId'];
                let stepDescId = stepContainersConf[step]['stepDescriptionId'];
                let iconContainerId = stepContainersConf[step]['iconContainerId'];

                let brandImgHeight = document.getElementById(`${brandImgContainerId}`).clientHeight;
                let iconContainerHeight = document.getElementById(`${iconContainerId}`).clientHeight;

                /**
                 * descBlkHeight: Description Block height
                 */
                let descBlkHeight = document.getElementById(`${stepDescId}`).clientHeight;

                let lhsHeight = iconContainerHeight + descBlkHeight + DESC_BLK_MGN_TOP;
                let rhsHeight = brandImgHeight;


                /**
                 * uTopCrdDescBlock: Updated Top coordination of description block.
                 * uContainerHeight: Updated height of each steps container.
                 */
                uStepCntrConf[step] = {};
                uStepCntrConf[step]['brandImageHeight'] = parseInt(brandImgHeight);
                uStepCntrConf[step]['uTopCrdDescBlock'] = parseInt(brandImgHeight) + DESC_BLK_MGN_TOP;
                uStepCntrConf[step]['uContainerHeight'] = lhsHeight > brandImgHeight ? lhsHeight : brandImgHeight;
            });

            setUpStepCntrConf({ ...uStepCntrConf });


            setUpTypeBStepCntrConf({ ...uDescBlkLCords });
            setDesktopDevice(true);
        }, 100);

        /**
         * Once the component gets unmount, `descBlkLCord`
         * need to get cleared.
         */
        return () => {
            clearTimeout(descBlkLCord);
        }

    }, [windowWidth]);

    const renderHomeBuyingSections = () => {

        if (stepContainers.length == 0) {

            return null;
        } else {

            return stepContainers.map((step, index) => {

                if (index % 2 == 0) {

                    return (
                        <div className="hbs-individual-step-container"
                            key={index}
                        >
                            <TypeAStep
                                isMobileDevice={isMobileDevice}
                                stepContainerId={stepContainersConf[step]['containerId']}
                                stepIconContainerId={stepContainersConf[step]['iconContainerId']}
                                stepDescriptionId={stepContainersConf[step]['stepDescriptionId']}
                                stepBrandImgCcontainerId={stepContainersConf[step]['brandImgContainerId']}
                                stepContainerHeight={upStepCntrConf[step]['uContainerHeight']}
                                stepDescBlkTCrd={upStepCntrConf[step]['uTopCrdDescBlock']}
                                stepIcon={stepIcons[index]}
                                stepBrandImg={stepBrandImages[index]}
                                stepHeading={stepContainersConf[step]['stepTitle']}
                                stepDesc={stepContainersConf[step]['stepDesc']}
                            />
                        </div>
                    )
                }
                else {

                    return (
                        <div className="hbs-individual-step-container"
                            key={index}
                        >
                            <TypeBStep
                                isDesktopDevice={isDesktopDevice}
                                stepContainerId={stepContainersConf[step]['containerId']}
                                stepBrandImgCcontainerId={stepContainersConf[step]['brandImgContainerId']}
                                stepBrandImgHeight={upStepCntrConf[step]['brandImageHeight']}
                                stepIconContainerId={stepContainersConf[step]['iconContainerId']}
                                descBlkLCord={upTypeBStepCntrConf[step]['left']}
                                stepDescriptionId={stepContainersConf[step]['stepDescriptionId']}
                                stepContainerHeight={upStepCntrConf[step]['uContainerHeight']}
                                stepDescBlkTCrd={upStepCntrConf[step]['uTopCrdDescBlock']}
                                stepIcon={stepIcons[index]}
                                stepBrandImg={stepBrandImages[index]}
                                stepHeading={stepContainersConf[step]['stepTitle']}
                                stepDesc={stepContainersConf[step]['stepDesc']}
                            />
                        </div>
                    )
                }
            })
        }


    }

    /**
     * stepDescBlkTCrd: Step description block top coordinate
     */
    return (
        <div className="hbs-container">

            <div className="hbs-title">
                3 steps to easier homebuying
            </div>

            <div className="hbs-sub-title">
                We’ll Get You Through the Final Stages of Homebuying— Quickly &#38; Confidently
            </div>
            {
                renderHomeBuyingSections()
            }
        </div>
    )
}

export default HomeBuyingSteps;