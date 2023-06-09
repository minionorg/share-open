/**
 * 检查字符串是否为IPv4
 *
 * @param {string} str 将要检查的字符串
 * @return {boolean}  是否符合
 * @example
 * isIPv6('::1') = true
 * isIPv6('2001:db8:0000:1:1:1:1:1') = true
 * isIPv6('::ffff:127.0.0.1') = true
 * isIPv6('fe80::1234%1') = true
 * isIPv6('ff08::9abc%10') = true
 * isIPv6('ff08::9abc%interface10') = true
 * isIPv6('ff02::5678%pvc1.3') = true
 * isIPv6('127.0.0.1') = false
 * isIPv6('0.0.0.0') = false
 * isIPv6('255.255.255.255') = false
 */
declare function isIPv6(str: string): boolean;
export default isIPv6;
