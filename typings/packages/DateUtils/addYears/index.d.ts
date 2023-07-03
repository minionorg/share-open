/**
 * 年份添加年数
 *
 * @param {Date} date 日期
 * @param {(number | string)} number 年数
 * @return {Date}  经过的年数后日期
 * @example
 * const date = new Date('2023-06-01T12:00:00');
 * addYears(date, 2) = new Date('2025-06-01T12:00:00')
 * addYears(date, -1) = new Date('2022-06-01T12:00:00')
 * addYears(date, 0) = new Date('2023-06-01T12:00:00')
 * addYears(date, '3') = new Date('2026-06-01T12:00:00')
 * addYears(date, '-2') = new Date('2021-06-01T12:00:00')
 */
declare function addYears(date: Date, number: number | string): Date;
export default addYears;
