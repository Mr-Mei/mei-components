/**
 * 深度克隆
 * @param {*} target 需要克隆的对象
 * @returns 
 */

export const deepClone = (target, map = new WeakMap())=> {
  if(typeof target === "object") {
    let cloneRes = Array.isArray(target) ? [] : {};
    // 防止循环调用导致栈内存溢出
    if(map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneRes);
    for (const key in target) {
      cloneRes[key] = deepClone(target[key], map)
    }
    return cloneRes
  }else {
    return target
  }
}