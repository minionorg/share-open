/**
 * 校验是否含义特殊字符或emoji
 *
 * @param {string} str 将要检查的字符串
 * @return {boolean} 有则为真
 * @example
 * hasEmoji('🎄 edvins.io') = true
 * hasEmoji('🎄a🎄b🎄c🎄d🎄e🎄f🎄g🎄h') = true
 * hasEmoji('正常字符串') = false
 */
declare function hasEmoji(str: string): boolean;
export default hasEmoji;
