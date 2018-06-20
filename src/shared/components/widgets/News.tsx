import React from "react";
import styled from "styled-components"
import { TabList } from "../parts/news/TabList";
import { TabPanelList } from "../parts/news/TabPanelList";

const tabs = [
    {
        id: 1,
        name: 'マイニュース',
        active: false,
    },
    {
        id: 2,
        name: 'すべて',
        active: true,
    },
    {
        id: 3,
        name: '時事',
        active: false,
    },
    {
        id: 4,
        name: '芸能',
        active: false,
    },
    {
        id: 5,
        name: 'スポーツ',
        active: false,
    },
    {
        id: 6,
        name: 'コネタ',
        active: false,
    },
];

const Section = styled.section`
    margin-top: 10px;
`;

export default class News extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
        this.state = {
            tabs,
        };
    }

    public onClick(e) {
        const newTab = tabs.map((tab) => {
            tab.active = tab.id === parseInt(e.target.dataset.tabId, 10);
            return tab;
        });
        this.setState({ tabs: newTab });
    }

    public render(): React.ReactNode {
        return (
            <Section className="news">
                <TabList tabs={tabs} onClick={e => this.onClick(e)} />
                <TabPanelList tabs={tabs} />
            </Section>
        );
    }
}
