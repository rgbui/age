export const EmailRegex = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
export const PhoneRegex = /^1[3-9]\d{9}|5\d{10}$/;
export var phoneCode = /^[\d]{4}$/;
export var inviteCode=/^[A-Z\d]{5,20}$/;

export function autoImageUrl(url: string, width?: 50 | 120 | 250 | 500 | 900|1200) {
    if (!url || typeof url != 'string') {
        console.warn('auto image url is null');
        return '';
    }
    var newUrl = url;
    // if (url.startsWith('https://resources.shy.red')) newUrl = url.replace('https://resources.shy.red', 'https://resources.shy.live')
    // else if (url.indexOf('shy.red') > -1) {
    //     newUrl = url.replace(/shy\.red/g, 'shy.live');
    // }
    if (typeof width == 'number') {
        newUrl = newUrl + (newUrl.indexOf('?') > -1 ? "&" : "?") + "width=" + width;
    }
    return newUrl;
}