import React from "react";
import { NewsDivide } from "./NewsDivide";

export const NewsItems = (props) => (
    <ul>
        {props.newsItems.map((newsItem) => (
            <NewsDivide key={`newsItem${newsItem.id}`} newsItem={newsItem}></NewsDivide>
        ))}
    </ul>
);