import React from "react";
import styled from "styled-components"
import { ToolList } from "../parts/dailytool/ToolList";

const tools = [
    {
        id: 1,
        name: '天気',
        link: '//tenki.auone.jp/weather/01101?rf=au_top',
        icon: '//kimg.auone.jp/emu/dist/img/weather/100.png',
        text: '千代田区',
        maxtemp: '25℃',
        mintemp: '20℃'
    },
    {
        id: 2,
        name: '占い',
        link: '//sp.fortune.auone.jp/astro/ranking',
        icon: '//kimg.auone.jp/emu/dist/img/weather/200.png',
        text: 'みずがめ座'
    },
    {
        id: 3,
        name: '乗換・地図',
        link: '//touch.eznavi.auone.jp/transfer/',
        icon: '//kimg.auone.jp/emu/dist/img/weather/300.png',
        text: '乗換・地図'
    },
    {
        id: 4,
        name: 'auサポート',
        link: '//www.au.com/support/?aid=cs-cs-support-0001',
        icon: '//kimg.auone.jp/emu/dist/img/weather/400.png',
        text: 'auサポート'
    }
];

const Section = styled.section`
    position: relative;
    margin: 10px 0;
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
`;

export default class Dailytool extends React.Component<{}, {}> {

    public render(): React.ReactNode {
        return (
            <Section>
                <ToolList tools={tools} />
            </Section>
        );
    }
}
