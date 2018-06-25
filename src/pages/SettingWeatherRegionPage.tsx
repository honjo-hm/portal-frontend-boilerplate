/**
 * Setting Weather Page
 *
 * @package Page
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */

import SettingRegionTemplate from "../shared/components/templates/SettingRegionTemplate";
import { injectGlobal } from "styled-components";

/**
 * style
 */
injectGlobal`
    html, body, div, span, nav, ul, li, h1, h2, p, a {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-weight: inherit;
        font-style: inherit;
        font-family: inherit;
        font-size: 100%;
        vertical-align: baseline;
    }

    html {
        height: 100%;
        display: block;
        vertical-align: baseline;
    }

    body {
        line-height: 1;
        background: #fff;
        font-size: 14px;
        font-family: sans-serif;
        color: #3c3c3c;
        display: block;
    }

    ul {
        list-style: none;
    }

    section {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        display: block;
    }

    a {
        text-decoration: none;
    }

    a, a:active, a:hover, a:link {
        color: #3c3c3c;
    }
`;

// module
 export default () => (
    <SettingRegionTemplate title="天気設定" />
);


