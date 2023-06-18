/**
 * 校验email
 *
 * @param {string} str 将要检查的字符串
 * @return {boolean} 是则为真
 * @example
 * isEmail('111@qq.com') = true
 * isEmail('111@163.com') = true
 */
declare function isEmail(str: string): boolean;
export default isEmail;
