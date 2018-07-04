/**
 * デイリーツール - 天気
 */
import React from "react";
import styled from 'styled-components';

const WeatherArea = styled.div`
    display: -webkit-box;
    -webkit-box-align: center;
`;
const Icon = styled.div`
    position: relative;
`;
const AlertImg = styled.i`
    position: absolute;
    right: 3px;
    background-image: url("//dev-capybara1.kdev.auone.jp/emu/dist/img/sprite-lifetools.png?cc=unixtime");
    background-position: -37px -27px;
    background-size: 78px 65px;
    width: 11px;
    height: 10px;
`;
const Maxtemp = styled.span`
    display: block;
    color: #ef3743;
    font-weight: 700;
`;
const Mintemp = styled.span`
    display: block;
    color: #0574eb;
    font-weight: 700;
`;

export const WeatherParts = (props) => (
    <WeatherArea>
        <Icon>
            <img src={props.tool.icon} width="30" height="20"/>
            {(() => {
                {/* 警報バッジ付与 */}
                if (props.tool.alert) {
                  return <AlertImg/>;
                }
            })()}
        </Icon>
        <p>
            <Maxtemp>{props.tool.maxtemp}</Maxtemp>
            <Mintemp>{props.tool.mintemp}</Mintemp>
        </p>
    </WeatherArea>
);
