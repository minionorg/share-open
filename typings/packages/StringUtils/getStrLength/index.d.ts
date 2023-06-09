/**
 * 获取字符串的长度
 *
 * @param {string} str 目标字符串
 * @param {boolean} diff 是否区分中英文字符长度
 * @param {number} byte 中文占的字节
 * @return {number} 字符串长度
 */
/**
 * 获取字符串的长度
 * TODO:不应该用trim，让用户自己处理
 * @param {string} str 目标字符串
 * @param {boolean} [diff=false] 是否区分英文和非英文字符长度
 * @param {number} [byte=2] 非英文占的字节
 * @return {number} 目标字符串长度
 */
declare const getStrLength: (str: string, diff?: boolean, byte?: number) => number;
export default getStrLength;
