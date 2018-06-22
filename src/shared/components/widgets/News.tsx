import React from "react";
import styled from "styled-components"
import { TabList } from "./TabList";
import { TabPanelList } from "./TabPanelList";

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

interface NewsTabState {
    id: number;
    name: string;
    active: boolean;
}

interface NewsTabsStates {
    tabs: NewsTabState[];
}

export default class News extends React.Component<{}, NewsTabsStates> {
    constructor(props) {
        super(props);
        this.state = {
            tabs,
        };
    }

    public render(): React.ReactNode {
        return (
            <Section className="news">
                <TabList tabs={this.state.tabs} onClick={e => this.onClick(e)} />
                <TabPanelList tabs={this.state.tabs} onSwipe={e => this.onSwipe(e)} />
            </Section>
        );
    }

    private onClick(e) {
        this.updateTabsState(e);
    }

    private onSwipe(e) {
        const index = this.state.tabs.findIndex((tab) => {
            return tab.active;
        });

        // にっこり
        let i = 0;
        if (e.direction === 'prev') {
            i = index === 0 ? this.state.tabs.length - 1 : index - 1;
        } else {
            i = index === this.state.tabs.length - 1 ? 0 : index + 1;
        }

        this.updateTabsState(e, i);
    }

    private updateTabsState(e, tabIndex?) {
        const newTab = this.state.tabs.map((tab, index) => {
            if (tabIndex !== undefined) {
                tab.active = tabIndex === index;
            } else {
                tab.active = tab.id === parseInt(e.target.dataset.tabId, 10);
            }
            return tab;
        });
        this.setState({ tabs: newTab });
    }
}
