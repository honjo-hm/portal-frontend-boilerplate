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
