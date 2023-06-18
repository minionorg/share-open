/**
 * 转义html,防止xss攻击
 *
 * @param {string} str 目标字符串
 * @return {string} 转义后的字符串
 * @example
 * const str = '<a href="#">hello & world & \'</a>';
 * escapeHTML(str) = '&lt;a href=&quot;#&quot;&gt;hello &amp; world &amp; &#39;&lt;/a&gt;'
 */
declare function escapeHTML(str: string): string;
export default escapeHTML;
