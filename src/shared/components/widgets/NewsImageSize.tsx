import React from "react";
import styled from "styled-components";
import { NewsItems } from "../parts/news/NewsItems";

const imageSize = [
    {
        size: 'l'
    },
    {
        size: 's'
    },
    {
        size: 's'
    },
    {
        size: 's'
    },
    {
        size: 's'
    },
    {
        size: 's'
    },
    {
        size: 's'
    },
    {
        size: 's'
    },
    {
        size: 's'
    },
    {
        size: 's'
    },
    {
        size: 'm'
    },
    {
        size: 'm'
    },
    {
        size: 'ss'
    }
    ,
    {
        size: 'ss'
    }
    ,
    {
        size: 'ss'
    }
    ,
    {
        size: 'ss'
    }
    ,
    {
        size: 'ss'
    }
    ,
    {
        size: 'ss'
    }
    ,
    {
        size: 'ss'
    }
    ,
    {
        size: 'ss'
    }
    ,
    {
        size: 'ss'
    }
    ,
    {
        size: 'ss'
    }
    ,
    {
        size: 'ss'
    }
];

interface ImageSizeState {
    size: string
}

interface NewsListImageState {
    imageSize: ImageSizeState[];
}

const  NewsImageFirst = styled.span`
    width: 100%;
`;

export default class NewsList extends React.Component<{}, NewsListImageState> {

    constructor(props) {
        super(props);
        this.state = {
            imageSize
        };
    }

    public render(): React.ReactNode {
        return (
            <NewsImageFirst>
                <NewsItems imageSize={this.state.imageSize} />
            </NewsImageFirst>
        );
    }
}