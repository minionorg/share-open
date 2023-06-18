/**
 * 将字符转换为 Unicode 格式
 *
 * @param {string} ch 要转换的字符
 * @return {string} 转义的 Unicode 字符串
 * @example
 * nicodeEscaped(' ') = \u0020
 * unicodeEscaped('A') = \u0041
 * unicodeEscaped('哦') = \u54e6
 */
declare function unicodeEscaped(ch: string): string;
export default unicodeEscaped;
