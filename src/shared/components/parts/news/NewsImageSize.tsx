import React from "react";
import { NewsParts } from "./NewsParts";

export const NewsItems = (props) => (
    <ul>
        {props.imageSize.map((imageSize) => (
            <NewsParts key={`imageSize${imageSize.id}`} imageSize={imageSize}></NewsParts>
        ))}
    </ul>
);