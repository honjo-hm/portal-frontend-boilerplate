/**
 * App
 * page componentの上位
 * こいつでcomponentの最後の仕上げをしてあげる
 *
 * @package Page
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import "./_bootstrap";
import * as React from "react";
import { ContainerInitializer } from "../shared/libs/ContainerInitializer";
import { Container as IocContainer } from "typedi";
import { Provider } from "react-redux";
import { Store } from "redux";
import withRedux from "next-redux-wrapper";
import { NextContext } from "next";
import App, { Container, AppComponentProps } from "next/app";
import { RootState } from "../shared/stores/RootState";
import { initializeStore } from "../shared/stores/InitializeStore";

/**
 * InjectedInitialProps
 */
export interface InjectedInitialProps {
    store: Store<RootState>;
    iocContainer: IocContainer;
    nextContext: NextContext;
}

/**
 * AppProps
 */
export type AppProps = AppComponentProps & InjectedInitialProps;

/**
 * PortalApp
 * next-redux-wrapperによってnextjs<->reduxをつないでいる
 * initializeStoreに渡す初期stateは、SSRによって状態更新した内容が渡る
 * （window.__NEXT_DATA__.props.initialStateとしてclientに渡している）
 *
 * @author hoge(hoge@mediba.jp)
 */
export default withRedux(initializeStore)(class PortalApp extends App<AppProps> {

    /**
     * サーバーサイド or SPA遷移時初期に呼ばれる
     * Container Componentに共通的に一番最初にばらまくものをここで用意
     *
     * @param NextContext ctx
     *
     * @returns Promise<any>
     */
    public static async getInitialProps({ Component, ctx }): Promise<any> {

        // nextjsのcontext
        const nextContext = ctx as NextContext;

        // typediの初期化
        const iocContainer: IocContainer = new ContainerInitializer()
            .prepare("device", "hoge")
            .prepare("storage", "hoge")
            .prepare("hoge", "hoge")
            .load();

        // 子componentのgetInitialProps
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(nextContext);
        }

        return { pageProps, iocContainer, nextContext };
    }

    /**
     * render
     * 子Containerにcontextを渡してあげる役
     *
     * @returns ReactNode
     */
    public render(): React.ReactNode {

        const { Component, pageProps, store, iocContainer, nextContext } = this.props;

        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} 
                        context={nextContext} 
                        iocContainer={iocContainer} />
                </Provider>
            </Container>
        );
    }
})
