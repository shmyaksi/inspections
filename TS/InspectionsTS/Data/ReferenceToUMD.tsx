//TS 3.9.5
//The inspection 'Reference to a UMD global' is  by default

import React from "react";

export class SomeComponent extends React.Component<{}, {}> {
    public render() {
        return <div><span>Hi!</span></div>;
    }
}
