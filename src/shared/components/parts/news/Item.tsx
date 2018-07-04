import React from "react";
import {ItemUl, Items, ItemLink, Img, Title, TextWrap, Sub, CpName} from "./ItemStyle";



export const Item = (props) => (

    <ItemUl data-layout={props.layout}>
        {props.roopCounts.map((counts) => (
            <Items data-layout={props.layout}>
                <ItemLink data-layout={props.layout}>
                    <Img data-layout={props.layout}></Img>
                    <TextWrap data-layout={props.layout}>
                        <Title data-layout={props.layout}>台風6号発生 沖縄で大雨の恐れ</Title>
                        <Sub data-layout={props.layout}>
                            <CpName data-layout={props.layout}>xxx</CpName>
                        </Sub>
                    </TextWrap>
                </ItemLink>
            </Items>
        ))}
    </ItemUl>
);
