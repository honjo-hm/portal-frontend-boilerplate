import React from "react";
import DailytoolWidgets from "../widgets/dailytool/DailytoolWidgets";
import Banner from "../widgets/Banner";
import News from "../widgets/News";
import HeaderWidgets from "../widgets/HeaderWidgets";
import SidemenuWidgets from "../widgets/SidemenuWidgets";

export default class IndexSpTemplate extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
          sidemenuState: 'hidden'
        }
        this.sidemenuStatusUpdate = this.sidemenuStatusUpdate.bind(this);
    }

    sidemenuStatusUpdate(props) {
        this.setState({sidemenuState: props});
    }

    public render(): React.ReactNode {
        return (
            <div>
                <HeaderWidgets onClick={ () => this.sidemenuStatusUpdate('showed') }/>
                <SidemenuWidgets
                    status={ this.state.sidemenuState }
                    onClick={ () => this.sidemenuStatusUpdate('hidden') }
                />
                <DailytoolWidgets />
                <Banner />
                <News />
            </div>
        );
    }
}
