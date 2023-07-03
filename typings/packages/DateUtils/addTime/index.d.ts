type propsType = {
    years: number | string;
    months: number | string;
    days: number | string;
    hours: number | string;
    mins: number | string;
    secs: number | string;
};
/**
 * 日期添加时间
 *
 * @param {Date} date 日期
 * @param {(number | string)} props.years 年数, 默认为0
 * @param {(number | string)} props.months 月数, 默认为0
 * @param {(number | string)} props.days 天数, 默认为0
 * @param {(number | string)} props.hours 小时数, 默认为0
 * @param {(number | string)} props.mins 分钟数, 默认为0
 * @param {(number | string)} props.secs 秒数, 默认为0
 * @return {Date} 经过时间后返回日期
 * @example
 * const date = new Date('2023-06-01T12:00:00');
 * addTime(date, { years: 2, months: 3, days: 5, hours: 1, mins: 30, secs: 45 }) = new Date('2025-09-06T13:30:45')
 * addTime(date, { days: 10, hours: 8 }) = new Date('2023-06-11T20:00:00')
 * addTime(date, { years: -1, months: -2, days: -7, hours: -3, mins: -30, secs: -45 }) = new Date('2022-03-25T08:29:15')
 * addTime(date, { mins: 0 }) = new Date('2023-06-01T12:00:00')
 */
declare function addTime(date: Date, props: Partial<propsType>): Date;
export default addTime;
