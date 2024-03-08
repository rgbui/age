
import { UserBasic } from "..";
import { MergeSock } from "../../../component/lib/merge.sock";
import { authSock } from "../../../net/sock";
import { SockResponse } from "../../../net/sock/type";
import { userNativeStore } from "./user";

var batchUserBasic = new MergeSock(async (datas) => {
    var rs = await authSock.get('/users/basic', { ids: datas.map(d => d.id) });
    if (rs.ok) {
        await rs.data.list.eachAsync(async c => {
            await userNativeStore.put(c);
        });
        return datas.map(d => {
            return {
                id: d.id,
                data: rs.data.list.find(g => g.id == d.id)
            }
        })
    }
    else return []
})


class UserService {

    async getBasic(data: { userid: string }) {
        if (!data.userid) return { ok: false };
        var r = await userNativeStore.get(data.userid);
        if (r) return { ok: true, data: { user: r } };
        var g = await batchUserBasic.get<UserBasic>(data.userid);
        return { ok: true, data: g };
    }
    async getBasics(data: { ids: string[] }) {
        var users = await userNativeStore.getUsers(...data.ids);
        data.ids.removeAll(g => users.some(u => u.id == g));
        if (data.ids.length > 0) {
            var rs = await authSock.get<{ list: UserBasic[] }>(`/users/basic`, data)
            if (rs.ok) {
                await rs.data.list.eachAsync(async c => {
                    await userNativeStore.put(c);
                });
                rs.data.list.push(...users);
            }
            return rs;
        }
        else return {
            ok: true, data: { list: users }
        }
    }
}

export var userService = new UserService();