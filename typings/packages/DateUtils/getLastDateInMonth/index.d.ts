/**
 * 获取当前月份最后一天
 * Date.UTC => 年月（0表示1月）日时分秒
 * @example getLastDateInMonth(new Date(2022, 0, 1))
 * @param {*} date
 * @return {Date}
 */
declare const getLastDateInMonth: (date: Date) => Date;
export default getLastDateInMonth;
