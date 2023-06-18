export type DateType = string | Date;
export interface IDateOptions {
    format?: 'YYYY/MM/DD';
    delimiters?: ['/', '-'];
    strictMode?: false;
}
/**
 * 校验日期格式是否符合
 *
 * @param {(string | Date)} str 将要校验的字符串
 * @param {string} options.format 日期格式,默认为'YYYY/MM/DD'
 * @param {string[]} options.delimiters 日期格式里面的分隔符,默认为['/', '-']
 * @param {boolean} options.strictMode 是否严格遵守规范,默认为false
 * @return {boolean} 符合规范则返回真
 * @example
 * isDate(new Date()) = true
 * isDate(new Date([2014, 2, 15])) = true
 * isDate(new Date('2014-03-15')) = true
 * isDate('2020/02/29') = true
 * isDate('') = false
 * isDate('15072002') = false
 * isDate(null) = false
 * isDate(undefined) = false
 * isDate(42) = false
 * isDate('2022-02-30') = false
 * isDate('2019-02-29') = false
 * isDate('2019-04-31') = false
 * isDate('2020/03-15') = false
 */
declare function isDate(str: DateType, options?: Partial<IDateOptions>): boolean;
export default isDate;
