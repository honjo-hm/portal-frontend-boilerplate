/**
 * 個人設定ページ系のスタイル(Parts)
 */
import styled from 'styled-components'

export const SettingLeadBackLink = styled.p`
    position: relative;
    text-align: left;

    & a {
        position: relative;
        padding: 10px 0 10px 20px;
    }

    & a::before {
        transform: rotate(180deg);
        left: 8px;
        margin-top: -5px;
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
        -webkit-background-size: 5px 9px;
        background-size: 5px 9px;
    }
`;

export const SettingBottunClear = styled.div`
    max-width: 400px;
    margin: 10px auto;
    padding: 0 30px;

    & p {
        height: 37px;
        line-height: 37px;
        border: 1px solid #e9e9e9;
        background-color: #efefef;
        border-radius: 4px;
        text-align: center;
        font-size: 15px;

        span {
            padding-left: 30px;
            position: relative;
            display: inline-block;
        }
        span:before {
            left: 0;
            margin-top: -13px;
            background-image: url(https://dev-capybara1.kdev.auone.jp/emu/dist//img/sprite-setting.png?cc=1528868102);
            background-position: -39px 0;
            width: 25px;
            height: 25px;
            background-size: 64px 30px;
            background-repeat: no-repeat;
            position: absolute;
            top: 50%;
            content: '';
        }
    }
`;

export const TrainClearBottunArea = styled.span`
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    padding-left: 30px;
    position: relative;
    display: inline-block;
    font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
    font-size: 100%;
    vertical-align: baseline;
    line-height: 37px;

    &:before {
        left: 0;
        margin-top: -13px;
        background-image: url(https://dev-capybara1.kdev.auone.jp/emu/dist//img/sprite-setting.png?cc=1528868102);
        background-position: -39px 0;
        width: 25px;
        height: 25px;
        background-size: 64px 30px;
        background-repeat: no-repeat;
        position: absolute;
        top: 50%;
        content: '';
    }
`;

export const SettingLinkText = styled.p`
    border-bottom: 1px solid #e9e9e9;
`;

export const ServiceLinkAncher = styled.a`
    display: block;
    padding: 12px 25px 12px 10px;
    font-size: 15px;
    position: relative;

    &:visited {
        color: #727272;
    }
    & a:active, & a:hover, & a:link {
        color: #3c3c3c;
    }

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

export const SettingListItems = styled.li`
    border-bottom: 1px solid #e9e9e9;
`;

export const SettingTitle = styled.div`
    height: 24px;
    padding: 7px 12px;
    background-color: #f6f6f6;
    border-bottom: 1px solid #e9e9e9;
`;

export const SettingTitleText = styled.h2`
    position: relative;
    display: inline-block;
    height: 24px;
    padding-left: 12px;
    line-height: 24px;
    font-size: 16px;

    &::before, &::after {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 24px;
        background-color: #eb5505;
        content: '';
    }

    &::after {
        height: 12px;
        background: -webkit-gradient(linear,left top,left bottom,from(#fbb58f),to(#eb5505));
    }
`;

export const SettingLocationBtn = styled.div`
    margin-top: 15px;
    border-top: 1px solid #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    padding: 12px 0;
`;

export const SettingLocationText = styled.span`
    padding-left: 25px;
    background: url(https://dev-capybara1.kdev.auone.jp/emu/dist/img/location-pin.png?cc=1528868102) no-repeat;
    background-size: 15px 20px;
    display: inline-block;
    height: 20px;
    line-height: 20px;
`;

export const SettingText = styled.div`
 margin: 10px 10px 0;
 line-height: 1.5;
 font-size: 14px;
`;




