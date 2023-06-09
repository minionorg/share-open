/**
 * 检查字符串是否为空 ("") 或 null
 *
 * @param {string} str 要检查的字符串，可能为空
 * @return {*}  {boolean} 如果字符串为空或null，则为真
 * @example
 * isEmpty(null) = true
 * isEmpty('') = true
 * isEmpty(' ') = false
 * isEmpty('bob') = false
 * isEmpty('  bob  ') = false
 * isEmpty(1) = throw TypeError
 */
declare function isEmpty(str: string): boolean;
export default isEmpty;
