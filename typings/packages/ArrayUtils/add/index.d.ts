/**
 * 数组添加元素
 *
 * @param {array} array 将要添加的数组
 * @param {any} item 将要添加的元素
 * @param {number} index 添加的位置,可选参数
 * @return {array}  返回添加后的原数组
 * @example
 * add([], 'a') = ['a']
 * add([], 1) = [1]
 * add([1, '2'], 'a') = [1, '2', 'a']
 * add([1], { a: 1 }) = [1, { a: 1 }]
 * add([1], { a: 1 }, -1) = [{ a: 1 }, 1]
 * add([1, 2], 3, 2) = [1, 2, 3]
 * add([1, 2], 3, 1) = [1, 3, 2]
 * add(1, 1) = throw TypeError
 * add([], 1, 'a') = throw TypeError
 */
declare function add<T>(array: T[], item: T, index?: number): T[];
export default add;
