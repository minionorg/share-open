/**
 * 日期添加天数
 *
 * @param {Date} date 日期
 * @param {(number | string)} number 天数
 * @return {Date}  经过天数后的日期
 * @example
 * const date = new Date('2023-06-01T12:00:00')
 * addDays(date, 5) = new Date('2023-06-06T12:00:00')
 * addDays(date, -3) = new Date('2023-06-29T12:00:00')
 * addDays(date, 0) = new Date('2023-06-01T12:00:00')
 * addDays(date, '2') = new Date('2023-06-04T12:00:00')
 * addDays(date, '-4') = new Date('2023-06-28T12:00:00')
 */
declare function addDays(date: Date, number: number | string): Date;
export default addDays;
