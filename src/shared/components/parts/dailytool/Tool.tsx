import React from "react";
import styled from 'styled-components';

const Item = styled.li`
    list-style-type: none;
    width: 25%;
    height: 25%;
    box-sizing: border-box;
    font-size: 10px;
    border-right: 1px solid #e9e9e9;
    &:last-child {
      border: 0;
    }
`;
const Link = styled.a`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    text-decoration: none;
    min-height: 55px;
    line-height: 1.3;
`;
const Personal = styled.div`
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-flex: 1;
`;
const Img = styled.img`
`;
const Maxtemp = styled.span`
    display: block;
    color: #ef3743;
    font-weight: 700;
`;
const Mintemp = styled.span`
    display: block;
    color: #0574eb;
    font-weight: 700;
`;
const Text = styled.p`
    padding-bottom: 4px;
    color: #9e9e9e;
`;

export const Tool = (props) => (
  <Item>
      <Link href={props.tool.link} data-ga-action="Daily" data-ga-label={props.tool.name}>
          <Personal>
                  <Img src={props.tool.icon} width="30" height="20"/>
              {(() => {
                  if (props.tool.maxtemp && props.tool.mintemp) {
                    return <p>
                        <Maxtemp>{props.tool.maxtemp}</Maxtemp>
                        <Mintemp>{props.tool.mintemp}</Mintemp>
                    </p>;
                  }
              })()}
          </Personal>
          <Text>{props.tool.text}</Text>
      </Link>
  </Item>
);
