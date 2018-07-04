/**
 * Index Page
 *
 * @package Page
 * @since 2018.XX.XX
 * @copyright mediba.inc
 */
import "./_bootstrap";
import { connect } from "react-redux";
// import { Store, AnyAction } from "redux";
import { StoreWithThunk } from "redux/store";
import { RootState } from "../shared/stores/RootState";
import { IndexContainer } from "../shared/components/containers/IndexContainer";
import { loadedAction } from "../shared/stores/articles/ArticleAction";

/**
 * 本体
 * connectへは全stateを渡す（graphQLで取得した内容をloadしたりするので、限定しない）
 * https://qiita.com/MegaBlackLabel/items/df868e734d199071b883
 *
 * @author hoge(hoge@mediba.jp)
 */
export default connect(state => state)(class extends IndexContainer {

    /**
     * getInitialProps from next-redux-wrapper
     * 子componentのconstructorより先に呼ばれる
     *
     * @param StoreWithThunk<RootState> store
     * @param boolean isServer
     *
     * @returns Promise<any> props
     */
    public static async getInitialProps({ store, isServer }: { store: StoreWithThunk<RootState>; isServer: boolean }) {

        console.log(store.getState());

        if (isServer) {
            store.dispatch(loadedAction(["hoge", "fuga"]));
        }

        console.log(store.getState());
    }
});
