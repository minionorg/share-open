/**
 * 获取url地址的参数
 *
 * @param {string} url 地址
 * @return {object} 参数对象
 * @example
 * const url = 'http://www.baidu.com?name=elephant&age=25&sex=male&num=100'
 * queryURLParams(url) = {
 *  name: 'elephant',
 *  age: '25',
 *  sex: 'male',
 *  num: '100',
 * });
 */
declare function queryURLParams(url: string): object;
export default queryURLParams;
