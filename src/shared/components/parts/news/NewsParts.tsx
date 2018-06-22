import React from "react";
import styled from "styled-components";
import { Title } from "./Title";
import { Lastupdate } from "./Lastupdate";
import { ServiceName } from "./ServiceName";
import { Label } from "./Label";
import { Thumbnail } from "./Thumbnail";

const NewsText = styled.div`
    -webkit-box-flex: 1;
    padding: 3px 0 3px 5px;
`;

const NewsItem = styled.li`
    width: 100%;
    border-top: 1px solid #f6f6f6;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    vertical-align: top;
    clear: left;
`;

const NewsLink = styled.a`
    display: -webkit-box;
    display: -ms-flexbox;
    display: box;   
    position: relative;
    -webkit-box-align: center;
    padding: 3px 0;
`;

export default class NewsParts extends React.Component {

    public render(): React.ReactNode {
        return (
            <ul>
                <NewsItem>
                    <NewsLink>
                        <Thumbnail />
                        <NewsText>
                            <Title />
                            <Label />
                            <Lastupdate />      
                            <ServiceName />
                        </NewsText>
                    </NewsLink>
                </NewsItem>
            </ul>
        );
    }
}   