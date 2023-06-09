/**
 * 转义html，防止xss攻击
 *
 * @address https://www.30secondsofcode.org/js/s/escape-html
 * @param {string} str 目标字符串
 * @return {string} 转义后的字符串
 */
declare const escapeHTML: (str: string) => string;
export default escapeHTML;
