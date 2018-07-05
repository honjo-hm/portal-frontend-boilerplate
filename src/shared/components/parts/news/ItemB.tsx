import React from "react";
import styled from "styled-components"

const Items = styled.li`
    border-bottom: 1px solid #f6f6f6;
`

const ItemsA = styled.a`
    display: block;
    padding: 3px 0;
`
const ImgDiv = styled.div`
    background-color: #ccc;
    display: block;
    position: relative;
    padding-top: 43.33%;
    background-position: center 25%;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
`

const TextDiv = styled.div`
    padding: 7px 0;
`

const TextP = styled.div`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    white-space: normal;
    text-overflow: clip;
    max-height: 2.4em;
    margin-bottom: 3px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.2;
`

const TextP2 = styled.div`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 1.2;
    color: #9e9e9e;
    font-size: 10px;
`

const Omake = styled.span`
    display: inline-block;
    margin-right: 5px;
`

export const ItemB = (props) => (
    <ul>
        <Items>
            <ItemsA>
                <ImgDiv></ImgDiv>
                <TextDiv>
                    <TextP>トランプ氏 72歳の誕生日</TextP>
                    <TextP2>
                        <Omake>xxx</Omake>
                    </TextP2>
                </TextDiv>
            </ItemsA>
        </Items>
    </ul>
);
