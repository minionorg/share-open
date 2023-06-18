/**
 * 判断是否为一个固话号码
 *
 * @param {(string | number)} value 将要检测的数字或字符串
 * @return {boolean} 是固话号码则为真
 * @example
 * isPhone('(020)8575744') = true
 * isPhone('020-8575744') = true
 * isPhone('(0756)8575744') = true
 * isPhone('0756-8575744') = true)
 * isPhone('8575744') = true
 * isPhone('85757445') = true
 * isPhone('857574456') = false
 * isPhone(8575744) = true
 * isPhone(85757445) = true
 */
declare function isPhone(value: string | number): boolean;
export default isPhone;
