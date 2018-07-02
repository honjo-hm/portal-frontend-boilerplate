/**
 * 個人設定ページ - 戻るボタン
 */
import React from "react";

import { SettingLead } from "../../../style/setting/common";

import { AreaInformationTextParts } from "../../parts/setting/AreaInformationTextParts";
import { BackBottunParts } from "../../parts/setting/BackButtonParts";
import { SetLocationParts } from "../../parts/setting/SetLocationParts";

/**
 * props
 */
interface AreaInfomationProps {
    information: InformationProps;
}

interface InformationProps {
    route: string,
    discription: string,
    label: string,
    useLocation: boolean,
}

/**
 * module
 */
export default class AreaInfomationWidget extends React.Component<AreaInfomationProps, {}> {
    /**
     * constructor
     *
     * @param props 
     */
    constructor(props: AreaInfomationProps) {
        super(props);
    }

    /**
     * render
     */
    public render(): React.ReactNode {
        let locationParts: any = null;
        if (this.props.information.useLocation) {
            locationParts =  <SetLocationParts />;
        }
        return (
            <SettingLead>
                <BackBottunParts route={this.props.information.route} params={{}} />
                <AreaInformationTextParts discription={this.props.information.discription} label={this.props.information.label} />
                {locationParts} 
            </SettingLead>
        );
    }
}
