/**
 * デイリーツール - ツール枠
 */
import styled from 'styled-components';
import { WeatherParts } from "./WeatherParts";
import { FortuneParts } from "./FortuneParts";

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

const ToolImg = styled.i`
    display: block;
    background-image: url("//dev-capybara1.kdev.auone.jp/emu/dist/img/sprite-lifetools.png?cc=unixtime");
    background-size: 78px 65px;
    background-position: -59px 0;
    width: 19px;
    height: 27px;
    &[data-tool-id="4"] {
        background-position: 0 -42px;
        width: 22px;
        height: 23px;
    }
`;
const Text = styled.p`
    padding-bottom: 4px;
    color: #9e9e9e;
`;

export const ToolParts = (props) => (
  <Item>
      <Link href={props.tool.link} data-ga-action="Daily" data-ga-label={props.tool.name}>
          <Personal>
              {(() => {
                  if (props.tool.id === 1) {
                      {/* 天気 */}
                      return <WeatherParts tool={props.tool} />;
                  } else if (props.tool.id === 2) {
                      {/* 占い */}
                      return <FortuneParts tool={props.tool} />;
                  }
                  {/* 乗換・auサポート */}
                  return <ToolImg data-tool-id={props.tool.id}/>;
              })()}
          </Personal>
          <Text>{props.tool.text}</Text>
      </Link>
  </Item>
);
