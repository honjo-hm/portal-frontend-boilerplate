import React from "react";
import styled from "styled-components"
import { TabList } from "../parts/news/TabList";
import { TabPanelList } from "../parts/news/TabPanelList";

const tabs = [
    {
        id: 1,
        name: 'マイニュース',
    },
    {
        id: 2,
        name: 'すべて',
    },
    {
        id: 3,
        name: '時事',
    },
    {
        id: 4,
        name: '芸能',
    },
    {
        id: 5,
        name: 'スポーツ',
    },
    {
        id: 6,
        name: 'コネタ',
    },
];

const Section = styled.section`
    margin-top: 10px;
`;

export default class News extends React.Component<{}, {}> {

    public render(): React.ReactNode {
        return (
            <Section className="news">
                <TabList tabs={tabs} />
                <TabPanelList tabs={tabs} />
            </Section>
        );
    }
}
