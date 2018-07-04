import React from "react";
import styled from 'styled-components';

const SidemenuAdWrapper = styled.div`
  width: 300px;
  height: 250px;
  display: block;
  margin: 0 auto;
  background-color: #CCC;
`;

export const SidemenuAd = (props) => (
    <SidemenuAdWrapper>
      <script src="//i.socdm.com/sdk/js/adg-script-loader.js?id={ props.id }&targetID=adg_{ props.id }&displayid={ props.displayid }&adType={ props.type }&async=true&tagver=2.0.0"></script>
    </SidemenuAdWrapper>
);
