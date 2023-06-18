/**
 * 日期添加分钟
 *
 * @param {Date} date 日期
 * @param {(number | string)} number 分钟数
 * @return {Date}  经过分钟后的日期
 * @example
 * const date = new Date('2023-06-01T12:00:00')
 * addMinutes(date, 30) = new Date('2023-06-01T12:30:00')
 * addMinutes(date, -15) = new Date('2023-06-01T11:45:00')
 * addMinutes(date, 0) = new Date('2023-06-01T12:00:00')
 * addMinutes(date, '45') = new Date('2023-06-01T12:45:00')
 * addMinutes(date, '-10') = new Date('2023-06-01T11:50:00')
 */
declare function addMinutes(date: Date, number: number | string): Date;
export default addMinutes;
