/**
 * 日期添加时间
 *
 * @param {Date} date 日期
 * @param {(number | string)} days 天数, 默认为0
 * @param {(number | string)} hours 小时数, 默认为0
 * @param {(number | string)} mins 分钟数, 默认为0
 * @param {(number | string)} secs 秒数, 默认为0
 * @return {Date} 经过时间后返回日期
 * @example
 * const date = new Date('2023-06-01T12:00:00')
 * addTime(date, 1, 2, 3, 30) = new Date('2023-06-02T14:03:30')
 * addTime(date, -1, -2, -3, -20) = new Date('2023-05-31T09:56:40')
 */
declare function addTime(date: Date, days?: number | string, hours?: number | string, mins?: number | string, secs?: number | string): Date;
export default addTime;
