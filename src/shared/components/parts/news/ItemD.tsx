import React from "react";
import styled from "styled-components"

const ItemsUl = styled.ul`
    display: -webkit-box;
    display: -ms-flexbox;
    display: box;
`

const Items = styled.li`
    border-bottom: 1px solid #f6f6f6;
    width: 50%;
    &:first-child {
        padding-right: 5px;
    }
`

const ItemsA = styled.a`
    display: block;
    -webkit-box-align: center;
    padding: 3px 0;
    &:before {
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 1px solid #d8d8d8;
    }
`
const ImgDiv = styled.div`
    background-color: #ccc;
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    position: relative;
    display: block;
    position: relative;
    padding-top: 75%;
`

const TextDiv = styled.div`
    -webkit-box-flex: 1;
    box-flex: 1;
    padding: 3px 0 3px 5px;
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

export const ItemD = (props) => (
    <ItemsUl>
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
    </ItemsUl>
);
