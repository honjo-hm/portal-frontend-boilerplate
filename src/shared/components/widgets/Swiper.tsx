import React from "react";
import styled from "styled-components"

// スワイプ方向の名前
const DIRECTION = {
    PREV: 'prev',
    NEXT: 'next',
};

// スワイプ判定距離
const DISTANCE = 80;

const Navigation = styled.div`
    position: fixed;
    top: 50%;
    z-index: 100;
    width: 40px;
    height: 80px;
    transition-duration: 0.1s;
    transition-property: transform;
    pointer-events: none;
    border: 1px solid #333;
    background-color: #999;
    transform: translate(0, -40px);
`;

const NavigationPrev = Navigation.extend`
    left: 0;
    transform: translate(-42px, -40px);
    &[data-visible=true] {
        transform: translate(0px, -40px);
    }
`;

const NavigationNext = Navigation.extend`
    right: 0;
    transform: translate(42px, -40px);
    &[data-visible=true] {
        transform: translate(0px, -40px);
    }
`;

interface SwiperProps extends React.Props<{any}> {
    onSwipe(e: any): void;
}

interface SwiperState {
    direction: string;
    hidden: boolean;
    isActive: boolean;
    isScroll: boolean;
    isSwipe: boolean;
    startX: number;
    startY: number;
}

export default class Swiper extends React.Component<SwiperProps, SwiperState> {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    public render(): React.ReactNode {
        return (
            <div
                onTouchStart={e => this.onTouchStart(e)}
                onTouchMove={e => this.onTouchMove(e)}
                onTouchEnd={e => this.onTouchEnd(e)}
                onTouchCancel={e => this.onTouchCancel(e)}
            >
                {this.props.children}

                <NavigationPrev data-visible={this.state.direction === 'prev'} />
                <NavigationNext data-visible={this.state.direction === 'next'} />
            </div>
        );
    }

    private getInitialState() {
        return {
            direction: '',
            hidden:  true,
            isActive:  false,
            isScroll:  false,
            isSwipe:  false,
            startX:  0,
            startY:  0,
        }
    }

    private onTouchStart(e): void {
        const position = this.getTouchPosition(e);

        this.setState({
            startX: position.pageX,
            startY: position.pageY,
            hidden: false,
        });
    }

    private onTouchMove(e): void {
        const position = this.getTouchPosition(e);

        // 垂直方向から60度はスクロールとして扱う
        const moveX = this.state.startX - position.pageX;
        const moveY = this.state.startY - position.pageY;
        const canSwipe = Math.abs(moveX / moveY) > Math.tan((60 * Math.PI) / 180);

        if (!this.state.isActive && !canSwipe) {
            this.setState({ isScroll: true });
        }

        if (this.state.isScroll) {
            return;
        }

        // スワイプ判定中の場合はスクロールをキャンセルする
        if (this.state.isActive || canSwipe) {
            // e.preventDefault();
        }

        // スワイプ距離の判定とナビゲーション表示
        let newState = {
            isActive: true,
            isSwipe: false,
            direction: '',
        }

        if (position.pageX < this.state.startX - DISTANCE) {
            newState.direction = DIRECTION.NEXT;
            newState.isSwipe = true;
        } else if (position.pageX > this.state.startX + DISTANCE) {
            newState.direction = DIRECTION.PREV;
            newState.isSwipe = true;
        }

        this.setState(newState);
    }

    private onTouchEnd(e): void {
        if (this.state.isSwipe) {
            this.props.onSwipe(this.state);
        } else if (this.state.direction) {
            // this.props.onSwipe(this.state);
        }

        this.setState(this.getInitialState())
    }

    private onTouchCancel(e): void {
        this.onTouchEnd(e);
    }

    private getTouchPosition(e) {
        const pageX = Math.floor(e.touches[0].pageX);
        const pageY = Math.floor(e.touches[0].pageY);
        return { pageX, pageY };
    }
}
