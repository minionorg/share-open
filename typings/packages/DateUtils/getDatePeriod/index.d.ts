import type { DateType, IDateOptions } from '../isDate';
/**
 * 传入两个Date类型的日期,求两者相隔多少天
 * IDateOptions 参考isDate的参数
 *
 * @param {number} start 开始时间
 * @param {number} finish 结束时间
 * @return {number} 间隔天数
 * @example
 * getDatePeriod(new Date(2022, 9, 25), new Date(2022, 8, 25)) = 30
 */
declare function getDatePeriod(start: DateType, finish: DateType, options?: Partial<{
    start: IDateOptions;
    finish: IDateOptions;
}>): number;
export default getDatePeriod;
