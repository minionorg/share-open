/**
 * 判断是否为闰年
 *
 * @param {Date} date 日期
 * @return {boolean} 是则为真
 * @example
 * isLeapYear(new Date(2022, 1)) = false
 * isLeapYear(new Date(2008, 1)) = true
 */
declare function isLeapYear(date: Date): boolean;
export default isLeapYear;
