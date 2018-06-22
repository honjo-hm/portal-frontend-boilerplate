import React from "react";
import styled from "styled-components";
import { TabList } from "../parts/news/Tab";
import { TabPanelList } from "../parts/news/TabPanel";
import Swiper, { SwipeDirection } from "./Swiper";

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

interface NewsTabState {
    id: number;
    name: string;
    active: boolean;
}

interface NewsTabsStates {
    tabs: NewsTabState[];
}

/**
 * ニュース
 */
export default class News extends React.Component<{}, NewsTabsStates> {
    constructor(props) {
        super(props);
        this.state = {
            tabs,
        };
    }

    public render(): React.ReactNode {
        return (
            <Item>
                <TabList tabs={this.state.tabs} onClick={e => this.onClick(e)} />
                <Swiper onSwipe={e => this.onSwipe(e)}>
                    <TabPanelList tabs={this.state.tabs} />
                </Swiper>
            </Item>
        );
    }

    private onClick(e) {
        this.updateTabsState(e);
    }

    private onSwipe(e) {
        const index = this.state.tabs.findIndex((tab) => {
            return tab.active;
        });

        // まだにっこり( '༥` )
        let i = 0;
        if (e.direction === SwipeDirection.PREV) {
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

const Item = styled.section`
    margin-top: 10px;
`;
