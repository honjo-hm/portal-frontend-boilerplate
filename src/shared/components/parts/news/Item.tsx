import React from "react";
import {Items, ItemsA, ImgDiv, TextP, TextDiv, TextP2, Omake} from "./ItemSmallStyle";



export const Item = (props) => (
    <ul>
        {props.roopCounts.map((tab) => (
            <Items data-layout={props.layout}>
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
