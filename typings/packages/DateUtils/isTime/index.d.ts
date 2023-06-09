/**
 * 校验时间格式
 *
 * @param {string} str 校验的字符串
 * @param {string} options.format 校验格式
 * @param {mode} options.mode 12小时制还是24小时制
 * @return {boolean}  符合则为真
 * @example
 * isTime('00:00:00') = true
 * isTime('23:59:03') = true
 * isTime('9:00:12') = true
 * isTime('00:00', { format: 'HH:MM' }) = true
 * isTime('23:59', { format: 'HH:MM' }) = true
 * isTime('9:00', { format: 'HH:MM' }) = true
 * isTime('12:59:59 PM', { mode: 12 }) = true
 * isTime('2:34:45 AM', { mode: 12 }) = true
 */
declare function isTime(str: string, options: {
    format: 'HH:MM:SS';
    mode: 24 | 12;
}): boolean;
export default isTime;
