/**
 * 检查字符串是否在IPv4范围内
 *
 * @param {string} str 将要匹配的字符串
 * @return {boolean}  是否匹配
 * @example
 * isIPv4Range('127.0.0.1/1') = true
 * isIPv4Range('0.0.0.0/1') = true
 * isIPv4Range('255.255.255.255/1') = true
 * isIPv4Range('1.2.3.4/1') = true
 * isIPv4Range('255.0.0.1/1') = true
 * isIPv4Range('0.0.1.1/1') = true
 * isIPv4Range('abc') = false
 * isIPv4Range('::1') = false
 * isIPv4Range('2001:db8:0000:1:1:1:1:1') = false
 * isIPv4Range('::ffff:127.0.0.1') = false
 * isIPv4Range('137.132.10.01') = false
 * isIPv4Range('0.256.0.256') = false
 * isIPv4Range('255.256.255.256') = false
 */
declare function isIPv4Range(str: string): boolean;
export default isIPv4Range;
