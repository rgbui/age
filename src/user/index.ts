import { makeObservable, observable } from "mobx";
import { IconArguments, ResourceArguments } from "../../extensions/icon/declare";
import { util } from "../../util/util";
import lodash from "lodash";
import { CacheKey, sCache } from "../../net/cache";
import { authSock } from "../../net/sock";
import { UA } from "../../util/ua";
import { fingerFlag } from "../../util/finger";
import { SockResponse } from "../../net/sock/type";

export enum UserStatus {
    offline = 0,
    online = 1,
    busy = 2,
    idle = 3,
    hidden = 4,
}

class User {
    public id: string = null;
    public sn: number = null;
    public createDate: Date = null;
    public phone: string = null;
    public checkPhone: boolean = null;
    public checkRealName: boolean = null;
    public realName: string = null;
    public role: 'user' | 'robot' = null;
    public paw: string = null;
    public checkPaw: boolean = null;
    public name: string = null;
    public avatar: ResourceArguments = null;
    public cover: IconArguments = null;
    public email: string = null;
    public checkEmail: boolean = null;
    public slogan: string = null;
    public rk: string;
    public uk: string;
    /**
     * 注册来源
     */

    public source: string = null;
    public inviteCode: string = null;
    public usedInviteCode: string = null;
    public config: object = null;
    public status: UserStatus = null;
    public online: boolean = null
    public allowSendLetter = true;
    public allowAddFriend = true;
    public experienceHelp: boolean = true;
    public isAutoCreateWorkspace: boolean = true;
    constructor() {
        makeObservable(this, {
            id: observable,
            sn: observable,
            createDate: observable,
            phone: observable,
            paw: observable,
            name: observable,
            avatar: observable,
            email: observable,
            slogan: observable,
            config: observable,
            inviteCode: observable,
            checkEmail: observable,
            cover: observable,
            realName: observable,
            checkRealName: observable,
            status: observable,
            allowAddFriend: observable,
            allowSendLetter: observable,
            experienceHelp: observable
        })
    }
    get isSign() {
        return this.id ? true : false;
    }
    async onUpdateUserInfo(userInfo: Partial<User>) {
        var updateData: Partial<User> = {};
        for (let n in userInfo) {
            if (util.valueIsEqual(userInfo[n], this[n])) continue;
            else updateData[n] = userInfo[n];
        }
        if (Object.keys(updateData).length > 0) {
            var r = await authSock.patch('/user/patch', updateData);
            if (r.ok) {
                this.syncUserInfo(updateData);
            }
        }
    }
    syncUserInfo(userInfo: Record<string, any>) {
        lodash.assign(this, userInfo);
    }
    async toSign() {
        // UrlRoute.push(ShyUrl.signIn);
    }
    private async registerDevice() {
        var devideId = await sCache.get(CacheKey.device);
        var cacFinger = await fingerFlag();
        if (devideId) {
            var cacheFinger = await sCache.get(CacheKey.finger);
            if (cacFinger == cacheFinger) {
                return;
            }
        }
        await sCache.set(CacheKey.finger, cacFinger);
        var r = await authSock.put<{ deviceId: string }, string>('/device/sign', {
            finger: cacFinger,
            platform: window.ageConfig.platform,
            browser: UA.browser,
            device: UA.device,
            os: UA.os,
            cpu: UA.cpu,
            deviceId: devideId || undefined
        });
        await sCache.set(CacheKey.device, r.data.deviceId);
    }
    async sign() {
        await this.registerDevice();
        var result: SockResponse<{ token: string, guid: string, user: Partial<User> }> = {}
        var token = await sCache.get(CacheKey.token)
        if (token) {
            result = await authSock.get('/sign');
            if (result.ok) {
                if (result.data.token != await token) {
                    await sCache.set(CacheKey.token, result.data.token, 180, 'd');
                }
            }
        }
        else {
            result.ok = false;
            result.warn = 'no sign';
        }
        if (result?.ok) {
            result.data.user.online = true;
            this.syncUserInfo(result.data.user);
        }
    }
    async createTim(force?: boolean) {
        // if (!this.tim || force == true) {
        //     var url = await sCache.get(CacheKey.timUrl);
        //     if (!url) {
        //         var ms = await masterSock.get<{ url: string }, string>('/pid/provider/tim');
        //         if (ms.ok) {
        //             url = ms.data.url;
        //             await sCache.set(CacheKey.timUrl, url);
        //         }
        //     }
        //     this.tim = await CreateTim('shy', url);
        //     var self = this;
        //     var data = await this.getTimHeads();
        //     data.sockId = this.tim.id;
        //     await this.tim.syncSend(HttpMethod.post, '/sync', data);
        //     this.tim.only('reconnected', async () => {
        //         var data = await self.getTimHeads();
        //         data.sockId = self.tim.id;
        //         if (surface.workspace) {
        //             data.wsId = surface.workspace.id;
        //             if (surface.supervisor?.page) {
        //                 data.viewUrl = surface.supervisor.page.elementUrl;
        //                 data.viewEdit = surface.supervisor.page?.page?.isCanEdit || false;
        //             }
        //         }
        //         self.tim.syncSend(HttpMethod.post, '/sync', data);
        //     })
        //     userTimNotify(this.tim);
        // }
    }
    async removeTim() {
        // await RemoveTim('shy')
    }
    async getTimHeads() {
        var device = await sCache.get(CacheKey.device);
        var token = await sCache.get(CacheKey.token);
        var lang = await sCache.get(CacheKey.lang);
        return {
            device,
            token,
            lang
        } as any
    }
    // tim: Tim
    // async wallet(): Promise<{ money: number, isDue: boolean, meal: "meal-1" | "meal-2", due: Date }> {
    //     var r = await channel.get('/user/wallet');
    //     if (r?.ok) {
    //         return r.data as any;
    //     }
    // }
    // async isFillPay(alert: string) {
    //     var us = await surface.user.wallet();
    //     if (config.isTestBeta || us.money > 5 || !us.isDue && (us.meal == 'meal-1' || us.meal == 'meal-2')) {
    //         return true;
    //     }
    //     else {
    //         ShyAlert(alert)
    //         return false;
    //     }
    // }
    /**
     * 
     * @returns 返回值 为1  表示通过路由跳转，而不是直接网址跳转
     */
    logout() {

    }
}


export var user = new User();