import React from "react";
import styled from "styled-components";

interface SwiperProps extends React.Props<{}> {
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

// スワイプ方向の名前
export const SwipeDirection = {
    PREV: 'prev',
    NEXT: 'next',
};

// スワイプ判定距離
export const SwipeDistance = 80;

/**
 * スワイプ
 */
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

                <NavigationPrev data-visible={this.state.direction === SwipeDirection.PREV} />
                <NavigationNext data-visible={this.state.direction === SwipeDirection.NEXT} />
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

        if (position.pageX < this.state.startX - SwipeDistance) {
            newState.direction = SwipeDirection.NEXT;
            newState.isSwipe = true;
        } else if (position.pageX > this.state.startX + SwipeDistance) {
            newState.direction = SwipeDirection.PREV;
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

function rotatePoint2D(nRadians, nX, nY) {
    var nSin = Math.sin(nRadians);
    var nCos = Math.cos(nRadians);
    return {
        x: nCos * nX - nSin * nY,
        y: nSin * nX + nCos * nY,
    };
}

const vars = {
    width: 40,
    height: 80,
    border: 3,
};

const Navigation = styled.div`
    position: fixed;
    top: 50%;
    z-index: 2;
    width: ${ vars.width * 2 }px;
    height: ${ vars.height }px;
    border-radius: ${ vars.width }px;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
    transition: transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
    ::after {
        position: absolute;
        top: ${ rotatePoint2D(45, vars.width / 2, vars.width / 2).y - vars.border }px;
        box-sizing: border-box;
        width: ${ vars.width / 2 }px;
        height: ${ vars.width / 2 }px;
        border-top: ${ vars.border }px solid #fff;
        content: '';
    }
`;

const NavigationPrev = Navigation.extend`
    left: 0;
    transform: translate(-${ vars.width * 2 }px, -${ vars.height / 2 }px);
    &[data-visible=true] {
        transform: translate(-${ vars.width }px, -${ vars.height / 2 }px);
    }
    ::after {
        left: 50%;
        border-left: ${ vars.border }px solid #fff;
        transform-origin: right top;
        transform: rotate(-45deg);
    }
`;

const NavigationNext = Navigation.extend`
    right: 0;
    transform: translate(${ vars.width * 2 }px, -${ vars.height / 2 }px);
    &[data-visible=true] {
        transform: translate(${ vars.width }px, -${ vars.height / 2 }px);
    }
    ::after {
        right: 50%;
        border-right: ${ vars.border }px solid #fff;
        transform-origin: left top;
        transform: rotate(45deg);
    }
`;
