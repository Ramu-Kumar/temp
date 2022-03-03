import React from 'react';
import "../../scss/home/titleGeniusPros.scss";

const TitleGeniusPros = (
    {
        isDesktopDevice,
        childClass,
        blockImg,
        blockHeading,
        blockHeadingProp,
        blockText,
        navigationHandler
    }
) => {

    return (
        <div className={`cc-container ${childClass}`}>

            <div className="cc-child-a">
                <object type="image/svg+xml"
                    className="cc-child-a-img"
                    data={blockImg}
                >
                </object>
            </div>

            <div className="cc-child-b-container">

                <h6 id={childClass} className="cccb-child-a"
                    style={isDesktopDevice ? { minHeight: blockHeadingProp } : {}}>
                    {
                        blockHeading
                    }
                </h6>

                <div className="cccb-child-b">
                    <a href={void (0)} className="cccb-child-b-anchor" onClick={navigationHandler}>
                        {
                            blockText
                        }
                    </a>
                </div>
            </div>

        </div>
    )
};

export default TitleGeniusPros;