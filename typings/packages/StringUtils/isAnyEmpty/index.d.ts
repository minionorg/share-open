/**
 * 检查是否有任何字符串为空("")或为null
 *
 * @param {...string[]} css 检查是否有任何字符串
 * @return {boolean} 是为真
 * @example
 * isAnyEmpty(null, null) = true
 * isAnyEmpty(null, 'foo') = true
 * isAnyEmpty(null, 'a', 'b') = true
 * isAnyEmpty('', 'bar') = true
 * isAnyEmpty('bob', '') = true
 * isAnyEmpty('  bob  ', null) = true
 * isAnyEmpty(' ', 'bar') = false
 * isAnyEmpty('foo', 'bar') = false
 */
declare function isAnyEmpty(...css: string[]): boolean;
export default isAnyEmpty;
