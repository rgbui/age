import { createBrowserHistory } from 'history'
export const ageHistory = createBrowserHistory()
import { generatePath, matchPath } from "react-router";
import { config } from "./common/config";

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
        ageHistory.push(UrlRoute.getUrl(url), state)
    },
    redict(url: string | AgeUrl, state?: Record<string, any>) {
        ageHistory.push(UrlRoute.getUrl(url), state)
    },
    isMatch(url: AgeUrl) {
        return currentParams(url) ? true : false;
    },
    match(url: AgeUrl) {
        return currentParams(url);
    },
    gen(url: AgeUrl, params: Record<string, any>) {
        return generatePath(url, params as any);
    }
}

export enum AgeUrl {
    root = '/',
    home = '/home',
    flow = '/flow',
    signOut = '/sign/out',
    signIn = '/sign/in',
    task='/task/:id',
    workCreate = '/work/create',
    _404 = '/404',

}