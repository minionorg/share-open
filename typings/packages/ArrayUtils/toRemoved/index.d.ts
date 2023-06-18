/**
 * 数组删除元素,返回新的数组
 *
 * @param {array} array 将要删除的数组
 * @param {number} index 删除的位置
 * @return {array} 返回新的数组
 * @example
 * toRemoved([1], 0) = []
 * toRemoved([1, 2], 0) = [2]
 * toRemoved([1, 2], 1) = [1]
 * toRemoved([1, 2], 0.5) = [2]
 * toRemoved([1, 2], 1.5) = [1]
 * toRemoved([1, 2], -1) = [2]
 * toRemoved([1, 2], 2) = [1]
 */
declare function toRemoved<T>(array: T[], index: number): T[];
export default toRemoved;
