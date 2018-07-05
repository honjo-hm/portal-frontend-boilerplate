import React from "react";
import styled from "styled-components"

const Items = styled.li`
    min-height: 56px;
    border-bottom: 1px solid #f6f6f6;
`

const ItemsA = styled.a`
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: box;
    -webkit-box-align: center;
    padding: 3px 0;
    &:before {
        position: absolute;
        width: 50px;
        height: 50px;
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
    width: 50px;
    height: 50px;
`

const TextDiv = styled.div`
    -webkit-box-flex: 1;
    box-flex: 1;
    padding: 3px 0 3px 5px;
`

const TextP = styled.div`
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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

export const ItemA = (props) => (
    <ul>
        {props.tab.map((tab) => (
            <Items>
                <ItemsA>
                    <ImgDiv></ImgDiv>
                    <TextDiv>
                        <TextP>台風6号発生 沖縄で大雨の恐れ</TextP>
                        <TextP2>
                            <Omake>xxx</Omake>
                        </TextP2>
                    </TextDiv>
                </ItemsA>
            </Items>
        ))}
    </ul>
);
