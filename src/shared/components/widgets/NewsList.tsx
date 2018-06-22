import React from "react";
import styled from "styled-components";
import NewsParts from "../parts/news/NewsParts";

// const NewsText = styled.div`
//     -webkit-box-flex: 1;
//     padding: 3px 0 3px 5px;
// `;

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

// export const imageS = {
//     width: "70px",
//     height: "70px",
// }

//  const SubTitle = styled(Header)`
//  &&& {
//    color: palevioletred;
//    margin-bottom: 3rem;
//  }`;

export default class NewsList extends React.Component {

    public render(): React.ReactNode {
        return (
            <ul>
                <NewsItem>
                    <NewsLink>
                        <NewsParts />
                    </NewsLink>
                </NewsItem>
            </ul>
        );
    }
}   