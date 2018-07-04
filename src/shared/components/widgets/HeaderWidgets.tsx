import React from "react";
import { ServiceTitle } from "../parts/ServiceTitle";
import { SidemenuButton } from "../parts/SidemenuButton";
import styled from 'styled-components';

const Header = styled.header`
    display: block;
    .header__cover {
        display: flex;
        align-items: center;
        justify-content: justify;
        height: 50px;
        margin: 0 10px;
    }
`;

export default class HeaderWidgets extends React.Component<any, any> {
  constructor (props) {
    super(props);
  }

  public render() {
    return (
      <Header>
        <div className="header__cover">
        <ServiceTitle />
        <SidemenuButton onClick={ this.props.onClick }/>
        </div>
      </Header>
    );
  }
}
