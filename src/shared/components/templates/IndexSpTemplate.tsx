import React from "react";
import NewsList from "../widgets/NewsList";
import DailytoolWidgets from "../widgets/dailytool/DailytoolWidgets";

export default class IndexSpTemplate extends React.Component {
    public render(): React.ReactNode {
        return (
            <div>
                <DailytoolWidgets />
                <NewsList />
            </div>
        );
    }
}
