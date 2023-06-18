/**
 * 判断字符串里面是否包括目标字符串
 *
 * @param {string} target 字符串
 * @param {string} str 目标字符串
 * @param {string} [separator] 分隔符
 * @return {boolean} 包括则为真
 * @example
 * contains(str, 'bc') = true
 * contains(str, 'bc', ' ') = true
 * contains('header margin-20', 'header') = true
 * contains('header margin-20', 'header', ' ') = true
 */
declare function contains(target: string, str: string, separator?: string): boolean;
export default contains;
