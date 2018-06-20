import React from "react";
import styled from 'styled-components';

const FortuneArea = styled.div`
    display: -webkit-box;
    -webkit-box-align: center;
`;
const FortuneImg = styled.i`
    display: block;
    background-image: url("//dev-capybara1.kdev.auone.jp/emu/dist/img/sprite-fortune.png?cc=unixtime");
    background-size: 98px 74px;
    background-position: 0 0;
    width: 27px;
    height: 26px;
`;
const Rank = styled.span`
    font-weight: 700;
`;

export const Fortune = (props) => (
    <FortuneArea>
        <FortuneImg data-astro-code={props.tool.astro_code}/>
        <Rank>{props.tool.rank}位</Rank>
    </FortuneArea>
);
