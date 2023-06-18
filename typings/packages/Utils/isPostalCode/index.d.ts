/**
 * 校验是否为邮政编码
 *
 * @param {(string | number)} value 将要检测的数字或字符串
 * @return {boolean} 是邮政编码则为真
 * @example
 * isPostalCode(510000) = true
 * isPostalCode('510000') = true
 * isPostalCode('5100000') = false
 */
declare function isPostalCode(value: string | number): boolean;
export default isPostalCode;
