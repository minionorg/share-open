/**
 * 数组添加元素,并返回新数组
 *
 * @param {array} array 将要添加的数组
 * @param {any} item 将要添加的元素
 * @param {number} index 添加的位置,可选参数
 * @return {array}  返回新的数组
 * @example
 * toAdded([], 'a') = ['a']
 * toAdded([], 1) = [1]
 * toAdded([1, '2'], 'a') = [1, '2', 'a']
 * toAdded([1], { a: 1 }) = [1, { a: 1 }]
 * toAdded([1], { a: 1 }, -1) = [{ a: 1 }, 1]
 * toAdded([1, 2], 3, 2) = [1, 2, 3]
 * toAdded([1, 2], 3, 1) = [1, 3, 2]
 * toAdded(1, 1) = throw TypeError
 * toAdded([], 1, 'a') = throw TypeError
 */
declare function toAdded<T>(array: T[], item: T, index?: number): T[];
export default toAdded;
