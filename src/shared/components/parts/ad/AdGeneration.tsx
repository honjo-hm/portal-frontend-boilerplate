import React from "react";
import styled from "styled-components";

function createUrl(id, targetID, displayid, adType, async = true, tagver = '2.0.0') {
    const scriptUrl = '//i.socdm.com/sdk/js/adg-script-loader.js';
    const params = {
        id,
        targetID,
        displayid,
        adType,
        async,
        tagver,
    };
    const query = Object.keys(params).map((key) => `${key}=${params[key]}`).join('&');

    return  `${scriptUrl}?${query}`;
};

export const AdGeneration = (props) => (
    // Todo: 履歴移動で表示されなくなる
    <React.Fragment>
        <script>
            console.log(999)
        </script>
        <script defer src={createUrl(
            props.adid,
            props.targetid,
            props.displayid,
            props.adtype,
        )}></script>
    </React.Fragment>
);
