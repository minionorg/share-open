/**
 * 创建一个类型判断函数
 *
 * @param {string} type 类型
 * @return {function} 返回一个对应的类型判断函数
 * @example
 * const isNumber = validateTypeHoc('Number')
 * isNumber('1') = false;
 */
declare function validateTypeHoc(type: string): (value: any) => boolean;
export default validateTypeHoc;
