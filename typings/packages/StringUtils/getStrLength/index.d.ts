/**
 * 获取字符串的长度
 * TODO:不应该用trim,让用户自己处理
 *
 * @param {string} str 目标字符串
 * @param {boolean} [diff] 是否区分英文和非英文字符长度,默认为false
 * @param {number} [byte] 非英文占的字节,默认为2
 * @return {number} 目标字符串长度
 * @example
 * getStrLength('abcd') = 4
 * getStrLength('获取中文长度', true) = 12
 * getStrLength('设置字节数', true, 3) = 15
 */
declare function getStrLength(str: string, diff?: boolean, byte?: number): number;
export default getStrLength;
