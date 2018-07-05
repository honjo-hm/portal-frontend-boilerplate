import React from "react";
import styled from "styled-components";
import { AdGeneration } from "./AdGeneration";

export const InfeedAd = (props) => (
    <Container>
        <Spinner>
            <AdGenerationWrapper>
                <AdGeneration {...props} />
            </AdGenerationWrapper>
        </Spinner>
    </Container>
);

const Container = styled.li`
    min-height: 57px;
`;

const Spinner = styled.div`
    min-height: 57px;
    background-image: url(//simg.auone.jp/emu/dist/img/ad_load.gif?cc=1529568177);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 40px 40px;
`;

const AdGenerationWrapper = styled.div`
    background-color: #fff;
`;
