export function transData(a, idStr, pidStr, chindrenStr) {
    let r = [],
        hash = {},
        id = idStr,
        pid = pidStr,
        children = chindrenStr,
        i = 0,
        j = 0,
        len = a.length; 
    for (; i < len; i++) {
        hash[a[i][id]] = a[i];
    }
    console.log('hash(将数组的每一项，放成是hash 的key、value值，key值为 数组每一项的id，value为数组每一项)==')
    console.log(hash)
    console.log('以上是 hash的打印值，由于hash是对象，结果其实会被下面的操作印象到，具体就是，hash在上面一步只是打印一个对象，里面8个key、value值，而里面还没有children的')
    for (; j < len; j++) {
        let aVal = a[j],
            hashVP = hash[aVal[pid]];  //暂时循环拿出 每一项的 pid 后，上面 hash是 以其id为 key值的，当每一项的 pid 如果对应有 其value值，也就是 pid是否等于ID
                                        // 如果等于，也就是，如果能拿到值，hashVP 为真的话，证明其是有子级的，下面判断处理
        if (hashVP) {                                         // 若 存在 ，则为这 一项 添加 一个 名为 children 的数组属性
            !hashVP[children] && (hashVP[children] = []);    // && 是一个 运算符之类的，意为，如果 前面的条件 为真，则 执行后面的 语句 注意需要括号包起来后面
            hashVP[children].push(aVal);     // 比如 以第一项对应的 pid 的那一项 （数组的某一项）
        } else {
            r.push(aVal);
        }
    }
    return r;
}
