/**
 * 月份添加月数
 *
 * @param {Date} date 日期
 * @param {(number | string)} number 月数
 * @return {Date}  经过的月数后日期
 * @example
 * const date = new Date('2023-06-01T12:00:00');
 * addMonths(date, 2) = new Date('2023-08-01T12:00:00')
 * addMonths(date, -1) = new Date('2023-05-01T12:00:00')
 * addMonths(date, 0) = new Date('2023-06-01T12:00:00')
 * addMonths(date, '3') = new Date('2023-09-01T12:00:00')
 * addMonths(date, '-2') = new Date('2023-04-01T12:00:00')
 */
declare function addMonths(date: Date, number: number | string): Date;
export default addMonths;
