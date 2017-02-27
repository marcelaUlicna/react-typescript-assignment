import * as React from "react";

export interface IHello {
    compiler: string;
    framework: string;
}

export class Hello extends React.Component<IHello, void> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}.</h1>;
    }
}