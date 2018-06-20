import React from "react";
import styled from "styled-components"
import { ToolList } from "../parts/dailytool/ToolList";

const tools = [
    {
        id: 1,
        name: '天気',
        link: '//tenki.auone.jp/weather/01101?rf=au_top',
        icon: '//dev-capybara1.kdev.auone.jp/emu/dist/img/weather/300.png',
        text: '千代田区',
        maxtemp: '25℃',
        mintemp: '20℃',
        alert: 1
    },
    {
        id: 2,
        name: '占い',
        link: '//sp.fortune.auone.jp/astro/ranking',
        text: 'やぎ座',
        rank: 1,
        astro_code: 1
    },
    {
        id: 3,
        name: '乗換・地図',
        link: '//touch.eznavi.auone.jp/transfer/',
        text: '乗換・地図'
    },
    {
        id: 4,
        name: 'auサポート',
        link: '//www.au.com/support/?aid=cs-cs-support-0001',
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
