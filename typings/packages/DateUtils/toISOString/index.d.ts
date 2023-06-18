/**
 * 返回一个ISO格式的字符串
 * 中国区是在东八区,相差8个小时
 *
 * @param {Date} date
 * @return {string} 返回YYYY-MM-DDTHH:mm:ss.sssZ格式的字符串
 * @example
 * toISOString(new Date('05 October 2011 14:48 UTC')) = '2011-10-05T14:48:00.000Z'
 * toISOString(new Date('2011/10/12')) = '2011-10-11T16:00:00.000Z'
 */
declare function toISOString(date: Date): string;
export default toISOString;
