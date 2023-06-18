/**
 * 创建一个类型判断函数
 * 将要废弃,使用validateTypeHoc
 *
 * @param {string} type 类型
 * @return {function} 返回一个对应的类型判断函数
 * @example
 * const isNumber = createType('Number')
 * isNumber('1') = false;
 */
declare function createType(type: string): (value: any) => boolean;
export default createType;
