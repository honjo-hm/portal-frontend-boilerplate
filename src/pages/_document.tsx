/**
 * Global Document
 *
 * @package Page
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import React from "react";
import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheet, injectGlobal } from "styled-components"
import reset from "styled-reset";

injectGlobal`
    ${reset}
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
`;

/**
 * SiteDocument
 *
 * @author hoge(hoge@mediba.jp)
 */
export default class SiteDocument extends Document {

    /**
     * 写経 from https://bilalbudhani.com/using-next-js-with-styled-components/
     *
     * @param renderPage renderPage
     *
     * @returns {}
     */
    static getInitialProps ({ renderPage }): {} {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();

        return { ...page, styleTags }
    }

    /**
     * render
     *
     * @returns ReactNode
     */
    public render(): React.ReactNode {
        return (
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
