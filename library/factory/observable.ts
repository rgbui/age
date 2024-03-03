

import { AgeExpress } from "../../src/app/block/express";
import { BlockFactory } from "./block.factory";

export function view(url: string) {
    return (target) => {
        target.prototype.url = url;
        BlockFactory.registerComponent(url, target);
    }
}

export function compile(url: string) {
    return (target) => {
        target.prototype.url = url;
        BlockFactory.registerCompileComponent(url, target);
    }
}

export type BlockData = {
    url: string,
    text?: string,
    description?: string,
    args:Partial<AgeExpress>[]
}

export function declare(data: BlockData | BlockData[]) {
    if (Array.isArray(data))
        data.forEach(d => BlockFactory.registerBlockData(d.url, d));
    else
        BlockFactory.registerBlockData(data.url, data);
}


