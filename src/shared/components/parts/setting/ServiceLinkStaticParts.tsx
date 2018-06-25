/**
 * 個人設定ページ - 設定変更ページリンク(その他)
 */
import React from "react";
import styled from 'styled-components'

//@ts-ignore
import { Link } from "../../../routes/index";

/**
 * style
 */
const SettingLinkText = styled.p`
    border-bottom: 1px solid #e9e9e9;
`;

const ServiceLinkAncher = styled.a`
    display: block;
    padding: 12px 25px 12px 10px;
    font-size: 15px;
    position: relative;

    &:after {
        display: block;
        position: absolute;
        top: 50%;
        right: 10px;
        width: 5px;
        height: 9px;
        margin-top: -4px;
        content: '';
        vertical-align: middle;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDMwQTM3RkQzMTFCMTFFNkJGMTZBNThBRjU2OUFFNTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDMwQTM3RkUzMTFCMTFFNkJGMTZBNThBRjU2OUFFNTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MzBBMzdGQjMxMUIxMUU2QkYxNkE1OEFGNTY5QUU1OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MzBBMzdGQzMxMUIxMUU2QkYxNkE1OEFGNTY5QUU1OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqZ4EjsAAADdSURBVHjaYmAAgv///zMxEACMq1at4vz69etmRkbG9QkJCVNxKWT6/v27B9BE53///k1ZsGBBNk6F8fHx65mYmHJAHHyKGWEMkAKQQrBuoEZ0ZzAic/ApZkS3ApdijGABSSC7ed68eR1YTYSBhQsXFv39+7cXrIiRsQJrQG/cuJEXaFowVNF3FhaWDUzYFL17924HMGytgNyHzMzM2rGxsTdZ8CkCmuYQFxf3AMWN2BQlJiY+QAkeQorAColRBA7H9+/fOwJpS3yKkGMjcv78+Qp40yPQSgZiAECAAQBvW5Z6XBH4UQAAAABJRU5ErkJggg==) no-repeat;
        background-size: 5px 9px;
    }
`;

/**
 * parts
 */
export const ServiceLinkStaticParts = (props) => (
    <SettingLinkText>
        {(() => {
            if (props.link) {
                return (
                    <ServiceLinkAncher href={props.link}>
                        <span>{props.label}</span>
                    </ServiceLinkAncher>
                );

            } else {
                return (
                    <Link route={props.url}>
                        <ServiceLinkAncher>
                            <span>{props.label}</span>
                        </ServiceLinkAncher>
                    </Link>
                );
            }
        })()}
    </SettingLinkText>
);
