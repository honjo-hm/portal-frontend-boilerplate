import React from "react";

//@ts-ignore
import { Link } from "../../routes/index";
import Banner from "../widgets/Banner";
import News from "../widgets/News";
import HeaderWidgets from "../widgets/HeaderWidgets";
import SidemenuWidgets from "../widgets/SidemenuWidgets";
import GlobalStyles from '../GlobalStyles'

export default class IndexTemplate extends React.Component<any, any> {
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
        GlobalStyles()
        return (
            <div>
                <div>
                    <h2>Hello Index</h2>
                    <ul>
                        <Link route="settings"><a>settings</a></Link>
                    </ul>
                </div>
                <div>
                    <HeaderWidgets onClick={ () => this.sidemenuStatusUpdate('showed') }/>
                    <SidemenuWidgets
                        status={ this.state.sidemenuState }
                        onClick={ () => this.sidemenuStatusUpdate('hidden') }
                    />
                    <Banner />
                    <News />
                </div>
            </div>
        )
    }
}
