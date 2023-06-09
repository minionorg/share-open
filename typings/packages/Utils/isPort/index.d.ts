/**
 * 检查是否为符合的端口号
 *
 * @param {string} str 将要检查的字符串
 * @return {boolean}  是否符合端口号
 * @example
 * isPort('0') = true
 * isPort('22') = true
 * isPort('80') = true
 * isPort('443') = true
 * isPort('3000') = true
 * isPort('8080') = true
 * isPort('65535') = true
 * isPort('') = false
 * isPort('-1') = false
 * isPort('65536') = false
 */
declare function isPort(str: string): boolean;
export default isPort;
