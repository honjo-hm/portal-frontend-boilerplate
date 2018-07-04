/**
 * 記事詳細 - CP情報・元記事リンク
 */
import React from "react";
import styled from "styled-components"

const ArticleInfo = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: box;
    -webkit-box-pack: justify;
    -webkit-box-align: center;
    margin: 10px 10px 20px;
`;
const Logo = styled.img`
    width: 100px;
    height: auto;
`;
const SubText = styled.p`
    line-height: 1.5;
    color: #9e9e9e;
    font-size: 10px;
`;
const LastUpdate = styled.span`
    margin-right: 5px;
`;
const ServiceName = styled.span`
    line-height: 1.5;
`;
const ServiceLink = styled.p`
    margin-top: 5px;
    text-align: right;
    a::after {
        width: 9px;
        height: 15px;
        margin: 0 0 2px 5px;
        vertical-align: middle;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAeCAYAAAAhDE4sAAAAAXNSR0IArs4c6QAAAiVJREFUSA29lM9rE1EQx2febpL+Nkkj9OClh156akFPheAviCAevCjiwX/BgxsqeOihlNoU/wovHkR6U2ojBDzr3UNBehDa/LBUssn+GN+M2ZCy2+0mAR+893Zmv/N5897OW4BemyofX0+tN1cDe9hZcQBDHB/3wfU+jwpTNzfIdAneAVBW9/yoMOSMJAudjYDYAdgA07jrbOe+iZlgEBDrxoX1QePCzoHGgYVAo8IiQaPALgQNC4sFDQO7FJQUJleExXFNClMXqBSqCOUG1Ayr9TiIS5RRIA4VLaKPSj3rvs6/HQrEwNSL+nN9ld7oHsS212YKc4ERLBo7Z6z6PR9oD4jSIiT0jIxZsreyB4nOiIMmyse3fPA/BBBE+KkA7zOE3yfKaNJqrLnkfdL66V7QoaFUsb0zf8Q2t0tBU+snNxwX+BczJwGIRypjFu3N7KEQekMsKGU1VwC8qt5O7h8EfiGki53KlR+DEH6+8IzSL+vLQO5+ANHaEzDVnSgIgyIzyli/lwi6NSJYYBEgNgGM204l913siCGU0cSr1iKBU+1DAE9TBpTiILLWIHyyXL/m+X6NABZ7/j8mGqV2Jf91UBf13M9o2jpb8Miv9iEItqHgQRIIgwU0u3FacMg+0NtZktUQuwrUQ3vn6peo1aN8Jjvts857PS2LANFFgked3fmPYiccJCNToaU/TUt3DxU+7e4W9hLGh2VcfGmr8ST85j97/gKfp/2SANj3oAAAAABJRU5ErkJggg==) no-repeat;
        background-size: 9px 15px;
        -webkit-background-size: 9px 15px;
        display: inline-block;
        content: '';
    }
`;
const ServiceLinkText = styled.a`
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
`;

const createImgUrl = cp => {
  return 'https://portal.st-img.jp/cp/' + cp.id + '/' + cp.image_name;
}

export const InfoParts = (props) => (
      <ArticleInfo>
          <Logo src={createImgUrl(props.info.cp)}></Logo>
          <div>
              <SubText>
                  <LastUpdate>{props.info.post_start_date.slice(5, 16).replace('-', '/')}</LastUpdate>
                  <ServiceName>{props.info.cp.name}</ServiceName>
              </SubText>
              <ServiceLink>
                  <ServiceLinkText href={props.info.url} data-ga-action="Function" data-ga-label="元記事を読む" className="link-text">
                  元記事を読む
                  </ServiceLinkText>
              </ServiceLink>
          </div>
      </ArticleInfo>
);
