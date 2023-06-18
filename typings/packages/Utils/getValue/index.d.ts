/**
 * 根据路径获取的对应值
 *
 * @param {any} obj 将要获取的值的对象或数组
 * @param {string} path 获取值的路径
 * @param {any} defaultValue 默认值undefined
 * @param {string} separator 路径的分隔符,默认值'.'
 * @return {any} 根据路径获取的对应值
 * @example
 * getValue({ code: 200 }, 'code') = 200
 * getValue([1, 2], '0') = 1
 * getValue([1, 2], '3') = undefined
 */
declare function getValue(obj: any, path: string, defaultValue?: any, separator?: string): any;
export default getValue;
