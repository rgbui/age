import { BlockCompile, BlockView } from "../base";
import { BlockData } from "./observable";



export class BlockFactory {
    private static blockMap: Map<string, {
        block: BlockData,
        view: typeof BlockView,
        compile: typeof BlockCompile
    }> = new Map();
    public static registerComponent(url: string, blockClass: typeof BlockView) {
        var b = this.blockMap.get(url);
        if (b) {
            b.view = blockClass;
        }
        else this.blockMap.set(url, { view: blockClass, compile: null, block: null });
    }
    public static registerCompileComponent(url: string, compileClass: typeof BlockCompile) {
        var b = this.blockMap.get(url);
        if (b) {
            b.compile = compileClass;
        }
        else this.blockMap.set(url, { view: null, compile: compileClass, block: null });
    }
    public static registerBlockData(url: string, data: BlockData) {
        var b = this.blockMap.get(url);
        if (b) {
            b.block = data;
        }
        else this.blockMap.set(url, { view: null, compile: null, block: data });
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
    public static getCompile(url: string) {
        var b = this.blockMap.get(url);
        if (b) {
            return b.compile
        }
    }
    private static parseBlockUrl(url: string) {
        if (url.indexOf('?') > -1) {
            var us = url.split('?');
            var parms = us[1];
            var data: Record<string, any> = {};
            if (typeof parms == 'string' && parms.startsWith('{')) {
                try {
                    data = window.eval('(' + parms + ')');
                }
                catch (ex) {
                    console.error(ex);
                }
            }
            return {
                url: us[0],
                data
            }
        }
        else return {
            url,
            data: {}
        }
    }
}