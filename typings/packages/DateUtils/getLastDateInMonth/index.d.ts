/**
 * 获取当前月份最后一天
 * Date.UTC => 年月日时分秒
 * 其中月份: 0表示1月
 * TODO: 优化
 *
 * @param {Date} date 日期
 * @return {Date} 最后一天日期
 * @example
 * getLastDateInMonth(new Date(2022, 0, 1))
 */
declare function getLastDateInMonth(date: Date): Date;
export default getLastDateInMonth;
