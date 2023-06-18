/**
 * 日期添加秒数
 *
 * @param {Date} date 日期
 * @param {(number | string)} number 秒数
 * @return {Date}  经过秒数后的日期
 * @example
 * const date = new Date('2023-06-01T12:00:00')
 * addSecs(date, 30) = new Date('2023-06-01T12:00:30')
 * addSecs(date, -20) = new Date('2023-06-01T11:59:40')
 * addSecs(date, 0) = new Date('2023-06-01T12:00:00')
 * addSecs(date, '20') = new Date('2023-06-01T12:00:20')
 * addSecs(date, '-40') = new Date('2023-06-01T11:59:20')
 */
declare function addSecs(date: Date, number: number | string): Date;
export default addSecs;
