import type { DateType, IDateOptions } from '../isDate';
/**
 * 转换日期的格式
 * IDateOptions 参考isDate的参数
 *
 * @param {string} convertOptions.format 转换的格式
 * @return {string}  转换后的日期格式
 * @example
 * dateFormatHoc({ format: 'YYYY-MM-DD' })('2002/07/15') = '2002-07-15';
 * dateFormatHoc({ format: 'YYYY-MM-DD' })(new Date('2002/07/15')) = '2002-07-15';
 */
declare function dateFormatHoc(convertOptions: Omit<IDateOptions, 'delimiters' | 'strictMode'>): (input: DateType, inputOptions?: IDateOptions) => string;
export default dateFormatHoc;
