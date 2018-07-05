import React from "react";
import styled from 'styled-components';

const SidemenuFooterWrapper = styled.div`
    padding: 15px;
    font-size: 10px;
    text-align: center;
`;

export const SidemenuFooter = () => (
    <SidemenuFooterWrapper>
        <small>©KDDI/©mediba</small>
    </SidemenuFooterWrapper>
);
