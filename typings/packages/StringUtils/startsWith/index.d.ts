/**
 * 检查字符串是否以null安全的方式以前缀开头
 *
 * @param {(string | null)} str 将要检查的字符串，可能为null
 * @param {(string | null)} prefix 前缀查找，可能为null
 * @param {boolean} ignoreCase 是否忽略大小写
 * @return {boolean} 如果匹配则返回真
 * @example
 * startsWith(null, null) = true
 * startsWith(null, 'abc') = false
 * startsWith('abcdef', null) = false
 * startsWith('abcdef', 'abc') = true
 * startsWith('ABCDEF', 'abc') = false
 */
declare function startsWith(str: string | null, prefix: string | null, ignoreCase?: boolean): boolean;
export default startsWith;
