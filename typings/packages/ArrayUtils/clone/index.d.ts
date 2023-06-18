/**
 * 复制数组,可能为null
 *
 * @param {(T[] | null)} ary 将要复制的数组
 * @return {T[]}  返回一个新的数组
 * @example
 * clone(null) = null
 * clone([]) = []
 * clone([1]) = [1]
 * clone([1, 2]) = [1, 2]
 * clone([1, 2, { a: 1 }]) = [1, 2, { a: 1 }]
 */
declare function clone<T>(ary: T[] | null): T[];
export default clone;
