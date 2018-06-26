import React from "react";
import { NewsParts } from "./NewsParts";

export const NewsItems = (props) => (
    <ul>
        {props.newsItems.map((newsItem) => (
            <NewsParts key={`newsItem${newsItem.id}`} newsItem={newsItem}></NewsParts>
        ))}
    </ul>
);