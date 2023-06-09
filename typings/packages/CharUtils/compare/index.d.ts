/**
 * 以数字方式比较两个字符的值
 *
 * @param {string} x 要比较的第一个字符
 * @param {string} y 要比较的第二个字符
 * @return {*} {number} 如果 x 和 y 相同, 值为 0
 * @example
 * compare('a', 'a') = 0
 * compare('', '') = 0
 * compare('123', '145') = 0
 * compare('', '4') = NaN
 * compare('3', 'a') = -46
 */
declare function compare(x: string, y: string): number;
export default compare;
