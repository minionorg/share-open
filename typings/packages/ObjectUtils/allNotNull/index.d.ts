/**
 * 所有不能为null
 *
 * @param {...any[]} values 剩余参数
 * @return {boolean}  是否所有不能为null
 * @example
 * allNotNull(1, 2, null) = false
 * allNotNull(1, 'a', 3) = true
 * allNotNull({}, 'n', 33) = true
 */
declare function allNotNull(...values: any[]): boolean;
export default allNotNull;
