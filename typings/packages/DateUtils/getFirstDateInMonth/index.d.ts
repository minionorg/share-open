/**
 * 获取当前月份第一天
 * Date.UTC => 年月（0表示1月）日时分秒
 * @example getFirstDateInMonth(new Date(2022, 0, 1))
 * @param {Date} date
 * @return {Date}
 */
declare const getFirstDateInMonth: (date: Date) => Date;
export default getFirstDateInMonth;
