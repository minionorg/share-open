/**
 * 时间格式转换高阶函数
 *
 * @param {string} convert.format 将要转换的格式
 * @return {function}  函数参数为将要转成的时间字符串
 * @example
 * timeFormatHoc({ format: 'HH:MM',mode: 24 })('11:12:20 PM') = '23:12'
 */
declare function timeFormatHoc(convert: {
    format: string;
    mode: number;
}): (input: string) => string;
export default timeFormatHoc;
