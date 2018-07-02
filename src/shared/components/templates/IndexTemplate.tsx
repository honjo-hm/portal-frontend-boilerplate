import React from "react";

//@ts-ignore
import { Link } from "../../routes/index";
import Banner from "../widgets/Banner";
import News from "../widgets/News";

export default class IndexTemplate extends React.Component<{}, {}> {
    public render(): React.ReactNode {
        return (
            <div>
                <div>
                    <h2>Hello Index</h2>
                    <ul>
                        <Link route="settings"><a>settings</a></Link>
                    </ul>
                </div>
                <div>
                    <Banner />
                    <News />
                </div>
            </div>
        )
    }
}
