/**
 * 日期添加小时
 *
 * @param {Date} date 日期
 * @param {(number | string)} number 小时数
 * @return {Date}  经过小时后的日期
 * @example
 * const date = new Date('2023-06-01T12:00:00')
 * addHours(date, 2) = new Date('2023-06-01T14:00:00')
 * addHours(date, -2) = new Date('2023-06-01T10:00:00')
 * addHours(date, 0) = new Date('2023-06-01T12:00:00')
 * addHours(date, '2') = new Date('2023-06-01T14:00:00')
 * addHours(date, '-4') = new Date('2023-06-01T08:00:00')
 */
declare function addHours(date: Date, number: number | string): Date;
export default addHours;
