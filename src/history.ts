import { createBrowserHistory } from "history";

import { generatePath, matchPath } from "react-router";
import { config } from "./common/config";

export const SyHistory = createBrowserHistory()
export function currentParams(routePath: string): Record<string, any> {
    var r = matchPath(location.pathname, {
        exact: true,
        path: routePath
    });
    if (r && r.params) {
        return r.params;
    }
    return undefined;
}
export var UrlRoute = {
    getUrl(url?: string) {
        if (url) {
            if (!url.startsWith('/')) url = '/' + url;
            if (config.isDev || config.isBeta) return url;
            else return config.isUS ? 'https://age.run' + url : 'https://age.run' + url;
        }
        else {
            if (config.isDev || config.isBeta) return '/';
            return config.isUS ? 'https://age.run' : 'https://age.run'
        }
    },
    getHost() {
        if (config.isBeta) return 'beta.age.run'
        return config.isUS ? 'age.run' : 'age.run'
    },
    redict(url: string | AgeUrl, state?: Record<string, any>) {
        SyHistory.push(url, state)
    },
    isMatch(url: AgeUrl) {
        return currentParams(url) ? true : false;
    },
    match(url: AgeUrl) {
        return currentParams(url);
    },
    gen(url: AgeUrl, params: Record<string, any>) {
        return generatePath(url, params);
    }
}

export enum AgeUrl {
    home = '/home',
    design = '/design',
    _404 = '/404'
}