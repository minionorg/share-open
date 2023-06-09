/**
 * 取消转义html，防止xss攻击
 *
 * @address https://www.30secondsofcode.org/js/s/unescape-html
 * @param {string} str 目标字符串
 * @return {string} 取消转义后的字符串
 */
declare const unescapeHTML: (str: string) => string;
export default unescapeHTML;
