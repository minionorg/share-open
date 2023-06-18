/**
 * 获取url中key对应的值
 *
 * @param {string} URL
 * @param {string} key
 * @return {string|null} 返回值
 * @example
 * let url = 'http://www.baidu.com?name=elephant&age=25&sex=male&num=100';
 * getURLValueByKey(url, 'age') = '25'
 */
declare function getURLValueByKey(URL: string, key: string): string | null;
export default getURLValueByKey;
