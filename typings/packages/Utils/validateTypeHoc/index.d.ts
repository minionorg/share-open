/**
 * 创建一个类型判断函数
 *
 * @param {string} type 类型
 * @return {(value: any) => boolean} 返回一个对应的类型判断函数
 */
declare const validateTypeHoc: (type: string) => (value: any) => boolean;
export default validateTypeHoc;
