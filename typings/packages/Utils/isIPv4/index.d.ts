export declare const IPv4SegmentFormat = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
export declare const IPv4AddressFormat: string;
export declare const IPv4AddressRegExp: RegExp;
/**
 * 检查字符串是否为IPv4
 *
 * @param {string} str 将要检查的字符串
 * @return {boolean} 是否符合
 * @example
 * isIPv4('127.0.0.1') = true
 * isIPv4('0.0.0.0') = true
 * isIPv4('255.255.255.255') = true
 * isIPv4('1.2.3.4') = true
 * isIPv4('255.0.0.1') = true
 * isIPv4('0.0.1.1') = true
 * isIPv4('192.168.1.164') = true
 * isIPv4('::1') = false
 * isIPv4('2001:db8:0000:1:1:1:1:1') = false
 * isIPv4('::ffff:127.0.0.1') = false
 * isIPv4('137.132.10.01') = false
 */
declare function isIPv4(str: string): boolean;
export default isIPv4;
