/**
 * 個人設定ページ - 地域設定
 */
import React from "react";

import SearchWidget from "../../widgets/setting/SearchWidget";
import SubPageDrawerBottunWidget from "../../widgets/setting/SubPageDrawerBottunWidget";
import SubPageDrawerCoverWidget from "../../widgets/setting/SubPageDrawerCoverWidget";
import SubPageDrawerWidget from "../../widgets/setting/SubPageDrawerWidget";
import SubPageHeaderWidget from "../../widgets/setting/SubPageHeaderWidget";

/**
 * props
 */
interface SearchProps {
    title: string;
}

/**
 * state
 */
interface SearchStates {
    showSidemenu: boolean;
}


/**
 * module
 */
export default class SearchTemplate extends React.Component<SearchProps, SearchStates> {
    /**
     * constructor
     *
     * @param props 
     */
    constructor(props: SearchProps) {
        super(props);
        this.state = {
            showSidemenu: false
        };
    }

    /**
     * render
     */
    public render(): React.ReactNode {
        return (
            <div>
                <div>
                    {/* ヘッダー */}
                    <SubPageHeaderWidget title={this.props.title}/>
                    {/* コンテンツ */}
                    <SearchWidget />
                </div>
                {/* ↓↓サイドメニュー↓↓ */}
                <SubPageDrawerWidget showSidemenu={this.state.showSidemenu} />
                <SubPageDrawerCoverWidget showSidemenu={this.state.showSidemenu} onClick={e => this.onHiddenidemenu(e)} />
                <SubPageDrawerBottunWidget onClick={e => this.onShowSidemenu(e)} />
                {/* ↑↑サイドメニュー↑↑ */}
            </div>
        );
    }

    /**
     * サイドメニュー表示
     *
     * @param e
     */
    private onShowSidemenu(e) {
        document.body.setAttribute("style", "overflow: hidden; height: 100%; width: 100%;");
        this.setState({showSidemenu: true});
    }

    /**
     * サイドメニュー非表示
     *
     * @param e
     */
    private onHiddenidemenu(e) {
        document.body.removeAttribute("style");
        this.setState({showSidemenu: false});
    }
}
