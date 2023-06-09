/**
 * 合并数组
 *
 * @param {array} ary 将要合并的数组
 * @param {...T[]} rest 合并的元素数组
 * @return {array}  合并后的数组
 * @example
 * addAll([], ['a']) = ['a']
 * addAll([1], ['a']) = [1, 'a']
 * addAll([1], [1]) = [1, 1])
 * addAll([1, 2], [1]) = [1, 2, 1]
 * addAll([1, 2], [1, 2, 3]) = [1, 2, 1, 2, 3]
 * addAll([1, 2], []) = [1, 2]
 * addAll([1, 2], [], [3], [4]) = [1, 2, 3, 4]
 * addAll([1, 2]) = [1, 2]
 * addAll(1, []) = throw SyntaxError
 * addAll([1, 2], 1) = throw SyntaxError
 */
declare function addAll<T>(ary: T[], ...rest: T[]): T[];
export default addAll;
