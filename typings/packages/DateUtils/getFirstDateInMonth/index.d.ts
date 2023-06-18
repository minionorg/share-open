/**
 * 获取当前月份第一天
 * Date.UTC => 年月日时分秒
 * 其中月份: 0表示1月
 * TODO: 优化
 *
 * @param {Date} date 日期
 * @return {Date} 第一天日期
 * @example
 * getFirstDateInMonth(new Date(2022, 0, 1))
 */
declare function getFirstDateInMonth(date: Date): Date;
export default getFirstDateInMonth;
