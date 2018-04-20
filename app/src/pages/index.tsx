import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from '../utils/withRedux'
import { initStore } from '../store'
import { addArticle } from '../actions/index'
import Layout from '../components/Layout'
import routes from '../routes'
import {ListEntity} from '../entities/ListEntity'
import {createConnection} from 'typeorm'

const { Link } = routes

interface IndexProps {
    isServer: boolean,
    addArticle: () => {},
    articles: Article[],
}

class IndexComponent extends React.Component<IndexProps> {
    // tslint:disable-next-line: no-shadowed-variable
    public static async getInitialProps({store, isServer, addArticle}: ContextObject) {
        let name = 'gggg';

        try {
            const connection = await createConnection();
            const list: ListEntity | undefined = await connection.manager.findOne(ListEntity, 1);
            // const list: ListEntity | undefined = await connection.manager.findByIds(ListEntity, [1]);

            if (list !== undefined) {
                name = list.name;
            }

        } catch (error) {
            console.log(error);
        }
        return {
            name,
            isServer,
            articles: store.getState().articles,
            addArticle,
        }
    }
    public render() {
        const props: IndexProps = this.props;
        return (
            <Layout {...props}>
                <h1>Article List -- name</h1>
                <button onClick={() => {props.addArticle()}}>Add Article</button>
                <ul>
                    {Object.keys(props.articles).map((key: any) => {
                        const data = props.articles[key]
                        return <li>
                            <Link route="article" params={{id: data.id}}>
                                <a>
                                    <p>article {data.id} 「{data.title}〝</p>
                                </a>
                            </Link>
                            {/* <Link route={`/article/${data.id}`}>
                                <a>
                                    <p>article {data.id} 「{data.title}〝</p>
                                </a>
                            </Link> */}
                        </li>
                    })}
                </ul>
            </Layout>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        articles: state.articles,
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addArticle: bindActionCreators(addArticle, dispatch),
    }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(IndexComponent)
