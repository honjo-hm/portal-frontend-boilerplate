import React from "react";
import NewsList from "../widgets/NewsList";

export default class IndexSpTemplate extends React.Component {
    public render(): React.ReactNode {
        return (
            <div>
                <NewsList />
            </div>
        );
    }
}
