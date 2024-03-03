// import { createBrowserHistory } from "history";

import { generatePath, matchPath } from "react-router";
import { config } from "./common/config";
// import { redirect } from "react-router-dom";
// export const SyHistory = createBrowserHistory()
export function currentParams(routePath: string): Record<string, any> {
    var r = matchPath({
        caseSensitive: true,
        path: routePath
    }, location.pathname);
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
            else return config.isUS ? 'https://shy.red' + url : 'https://shy.live' + url;
        }
        else {
            if (config.isDev || config.isBeta) return '/';
            return config.isUS ? 'https://shy.red' : 'https://shy.live'
        }
    },
    getHost() {
        if (config.isBeta) return 'beta.age.run'
        return config.isUS ? 'age.run' : 'age.run'
    },
    push(url: AgeUrl,
        state?: Record<string, any>,
        isRedict?: boolean
    ) {
        if (url == AgeUrl.workCreate && window.ageConfig.isPro) {
            if (isRedict) return location.href = UrlRoute.getUrl() + url;
        }
        else if (url == AgeUrl.signIn) {
            if (window.ageConfig.isPro) {
                return location.href = UrlRoute.getUrl() + url
            }
        }
        history.pushState(state||{}, '', UrlRoute.getUrl(url));
        // redirect(url,state)
    },
    redict(url: string | AgeUrl, state?: Record<string, any>) {
        console.log(state||{}, '', UrlRoute.getUrl(url));
        history.pushState(state||{}, '', UrlRoute.getUrl(url));
        // redirect(url,state)
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
    root = '/',
    home = '/home',
    flow = '/flow',
    signOut = '/sign/out',
    signIn = '/sign/in',


    workCreate = '/work/create',
    _404 = '/404',

}