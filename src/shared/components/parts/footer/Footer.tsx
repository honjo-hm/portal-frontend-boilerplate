import React from "react";
import styled from "styled-components"

export const Footer = (props) => (
    <Wrapper>
        <Item>
            <Copyright>©KDDI/©mediba</Copyright>
        </Item>
    </Wrapper>
);

const Wrapper = styled.section`
`;

const Item = styled.div`
    background-color: #f6f6f6;
`;

const Copyright = styled.div`
    margin: 0 auto;
    padding-top: 50px;
    max-width: 414px;
    height: 44px;
    background-color: #fff;
    line-height: 44px;
    font-size: 10px;
    text-align: center;
`;
