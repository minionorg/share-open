/**
 * 检查字符串是否在IPv6范围内
 *
 * @param {string} str 将要匹配的字符串
 * @return {boolean}  是否匹配
 * @example
 * isIPv6Range('::1/1') = true
 * isIPv6Range('2001:db8:0000:1:1:1:1:1/1') = true
 * isIPv6Range('::ffff:127.0.0.1/1') = true
 * isIPv6Range('abc') = false
 * isIPv6Range('127.0.0.1') = false
 * isIPv6Range('0.0.0.0') = false
 * isIPv6Range('255.255.255.255') = false
 * isIPv6Range('1.2.3.4') = false
 * isIPv6Range('::ffff:287.0.0.1') = false
 * isIPv6Range('::ffff:287.0.0.1/254') = false
 * isIPv6Range('%') = false
 * isIPv6Range('fe80::1234%') = false
 * isIPv6Range('fe80::1234%1%3%4') = false
 * isIPv6Range('fe80%fe80%') = false
 */
declare function isIPv6Range(str: string): boolean;
export default isIPv6Range;
