import { BlockRun, BlockView } from "../../src/app/block/base";
import { BlockData } from "./observable";

export class BlockFactory {
    private static blockMap: Map<string, {
        block: BlockData,
        view: typeof BlockView,
        runner: typeof BlockRun
    }> = new Map();
    public static registerComponent(url: string, blockClass: typeof BlockView) {
        var b = this.blockMap.get(url);
        if (b) {
            b.view = blockClass;
        }
        else this.blockMap.set(url, { view: blockClass, runner: null, block: null });
    }
    public static registerCompileComponent(url: string, compileClass: typeof BlockRun) {
        var b = this.blockMap.get(url);
        if (b) {
            b.runner = compileClass;
        }
        else this.blockMap.set(url, { view: null, runner: compileClass, block: null });
    }
    public static registerBlockData(url: string, data: BlockData) {
        var b = this.blockMap.get(url);
        if (b) {
            b.block = data;
        }
        else this.blockMap.set(url, { view: null, runner: null, block: data });
    }
    public static getView(url: string) {
        var b = this.blockMap.get(url);
        if (b) {
            return b.view;
        }
    }
    public static getBlock(url: string) {
        var b = this.blockMap.get(url);
        if (b) {
            return b.block;
        }
    }
    public static getRunner(url: string) {
        var b = this.blockMap.get(url);
        if (b) {
            return b.runner
        }
    }
}