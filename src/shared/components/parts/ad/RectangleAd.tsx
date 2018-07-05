import React from "react";
import styled from "styled-components";
import { AdGeneration } from "./AdGeneration";

export const RectangleAd = (props) => (
    <Container>
        <Spinner>
            <AdGeneration {...props} />
        </Spinner>
    </Container>
);

const Container = styled.div`
    min-height: 250px;
    margin: 20px 0;
    text-align: center;
`;

const Spinner = styled.div`
    min-height: 250px;
    width: 100%;
    background-image: url(//simg.auone.jp/emu/dist/img/load.gif?cc=1529568177);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 40px 40px;
`;
