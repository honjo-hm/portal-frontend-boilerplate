/**
 * Index Page
 *
 * @package Page
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import "./bootstrap";
// import styled from "styled-components";
import { injectGlobal } from 'styled-components'

//@ts-ignore
import { Link } from "../shared/routes/index";
import React from "react";
import IndexTemplate from "../shared/components/templates/IndexTemplate";
import IndexSpTemplate from "../shared/components/templates/IndexSpTemplate";

/**
 * 以下ちゃんとlibraryとして切り出す
 *
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://local.api.universal.auone.jp/graphql", {
    mode: "cors"
});

const query = `{
    getArticles(limit: 10) {
        id,
        code,
        cp_id,
        cp_name,
        genre_id,
        title,
        body
    }
    getUtils {
        currentTimestamp
    }
}`

client.request(query).then((data) => {
    console.log(data);
});
*/

injectGlobal`
    body {
        background-color: #fff;
        color: #3c3c3c;
        font-family: 'sans-serif';
        font-size :14px;
        -webkit-text-size-adjust: 100%;
        * {
            word-break: break-word;
        }
    }
    html, body {
        height: 100%;
    }
    input, textarea {
        font-family: 'sans-serif';
    }
    button {
        font-weight: normal;
        -webkit-appearance: none;
    }
    input[type="search"] {
        -webkit-appearance: textfield;
        -webkit-box-sizing: content-box;
    }
    input[type="search"]:focus {
        outline-offset: -2px;
    }
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }
    a {
        text-decoration: none;
        color: #3c3c3c;
    }
    a:link,
    a:hover,
    a:active {
        color: #3c3c3c;
    }
    a:visited {
        color: #727272;
    }`

export default () => (
    <div>
        <ul>
            <li>
                <Link route="settingServices"><a>settings</a></Link>
            </li>
        </ul>
        <IndexSpTemplate />
    </div>
)
