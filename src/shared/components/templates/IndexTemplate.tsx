import React from "react";
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

  public render() {
    GlobalStyles()
    return (
      <div>
        <HeaderWidgets onClick={ () => this.sidemenuStatusUpdate('showed') }/>
        <SidemenuWidgets
          status={ this.state.sidemenuState }
          onClick={ () => this.sidemenuStatusUpdate('hidden') }
        />
      </div>
    );
  }
}
