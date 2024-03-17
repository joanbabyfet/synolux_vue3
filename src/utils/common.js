//全局公共方法

export function goUrl(url) {
    return window.location.href = url
}

//文字的省略号
export function sliceWord(content, limit = 20) {
    let str = content
    if(str.length > limit) {
        str = str.substring(0, limit) + '...'
    }
    return str
}