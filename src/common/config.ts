
import * as short from 'short-uuid';

class Config {
    /**
     * * 打包发布的版本
     * dev 开发版
     * beta 测试版（线上的）
     * pro 正式版
     * inside 内部版
     * @returns 
     */
    get mode() {
        return MODE;
    }
    get isPro() {
        return this.mode == 'pro'
    }
    get isUS() {
        return REGIN == 'US'
    }
    get isBeta() {
        return this.mode == 'beta'
    }
    get isDev() {
        return this.mode == 'dev'
    }
    get version() {
        return VERSION
    }
    get isWeb() {
        return PLATFORM == 'web'
    }
    get isDesk() {
        return PLATFORM == 'desktop'
    }
    get isMobile() {
        return PLATFORM == 'mobile'
    }
  
    get platform() {
        return PLATFORM
    }
    guid() {
        return short.generate();
    }
    isOnline: boolean;
    constructor() {
        this.isOnline = window.navigator.onLine ? true : false;
    }
    get lang() {
        return this.isUS ? "English" : 'Chinese'
    }
}

export var config = new Config();
window.ageConfig = config;
window.shyLog = (...args) => {
    if (config.isDev || config.isBeta) {
        console.log(...args);
    }
}
window.addEventListener("online", function () {
    window.ageConfig.isOnline = window.navigator.onLine ? true : false;
}, false);
window.addEventListener("offline", function () {
    window.ageConfig.isOnline = window.navigator.onLine ? true : false;
}, false);

console.log('%c v' + config.version + ' ', 'background-color:rgba(255,0,0,.6);color:#fff;border-radius:3px');
