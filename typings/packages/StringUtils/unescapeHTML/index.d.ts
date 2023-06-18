/**
 * 取消转义html,防止xss攻击
 *
 * @param {string} str 目标字符串
 * @return {string} 取消转义后的字符串
 * @example
 * const str = '&lt;a href=&quot;#&quot;&gt;hello &amp; world &amp; &#39;&lt;/a&gt;';
 * unescapeHTML(str) = '<a href="#">hello & world & \'</a>'
 */
declare function unescapeHTML(str: string): string;
export default unescapeHTML;
