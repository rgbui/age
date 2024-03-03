import React from "react";

import "../../../library/declare";
import { Block } from ".";

export abstract class BlockView extends React.Component<{block:Block}> {
    abstract render(): JSX.Element;
}

export abstract class BlockRun {
    abstract run(): string | void;
}