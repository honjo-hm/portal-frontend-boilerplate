import React from "react";
import { LargeAd } from "../parts/ad/LargeAd";

/**
 * ニュース
 */
export default class Banner extends React.Component<{}, {}> {
    public render(): React.ReactNode {
        return (
            <LargeAd adid="35130" targetid={`adg_35130`} displayid="1" adtype="LARGE" />
        );
    }
}
