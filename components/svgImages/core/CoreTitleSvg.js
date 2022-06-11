import React from "react";
import styles from '../../../styles/Logo.module.css'

export default function CoreTitleSvg() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="166"
            height="51"
            fill="none"
            viewBox="0 0 166 51"
        >
            <path fill="url(#pattern0)" d="M0 0H166V51H0z"></path>
            <defs>
                <pattern
                    id="pattern0"
                    width="1"
                    height="1"
                    patternContentUnits="objectBoundingBox"
                >
                    <use
                        transform="matrix(.00168 0 0 .00546 0 -.005)"
                        xlinkHref="#image0_654_850"
                    ></use>
                </pattern>
                <image
                    id="image0_654_850"
                    width="596"
                    height="185"
                    xlinkHref="data:image/png;base64,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"
                ></image>
            </defs>
        </svg>
    );
}


