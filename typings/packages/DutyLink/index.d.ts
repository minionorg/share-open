/**
 * 创建一个责任链设计模式
 *
 * @class DutyLink
 */
declare class DutyLink {
    fn: any;
    nextNode: DutyLink | null;
    nextFlag: any;
    /**
     * Creates an instance of DutyLink.
     * @param {function} node 节点函数
     * @param {string} [flag='nextSuccessor'] 执行下一步的标识
     * @memberof DutyLink
     */
    constructor(node: any, flag?: any);
    after(node: any, flag?: any): DutyLink;
    start(...args: any): any;
    next(): any;
}
export default DutyLink;
