import React from "react";
import styled from 'styled-components';

export const SidemenuLists = (props) => {
  const Lists = props.menus.map((menu, index) => {
    return <li key={ `list` + index }>{ menu.name }</li>
  })
  return(
    <ul>
      { Lists }
    </ul>
)};
