/**
 * 判断是否为一个手机号
 *
 * @param {(string | number)} value 将要检测的数字或字符串
 * @return {boolean} 是手机号则为真
 * @example
 * isMobile(13433390647) = true
 * isMobile(1343339064) = false
 * isMobile('13433390647') = true
 */
declare function isMoblie(value: string | number): boolean;
export default isMoblie;
