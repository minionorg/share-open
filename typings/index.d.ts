import ArrayUtils from './packages/ArrayUtils';
import CharUtils from './packages/CharUtils';
import DateUtils from './packages/DateUtils';
import DutyLink from './packages/DutyLink';
import NumberUtils from './packages/NumberUtils';
import ObjectUtils from './packages/ObjectUtils';
import StringUtils from './packages/StringUtils';
import Utils from './packages/Utils';
export { ArrayUtils, CharUtils, DateUtils, DutyLink, NumberUtils, ObjectUtils, StringUtils, Utils, };
declare const _default: {
    ArrayUtils: {
        add: typeof import("./packages/ArrayUtils/add").default;
        addAll: typeof import("./packages/ArrayUtils/addAll").default;
        clone: typeof import("./packages/ArrayUtils/clone").default;
        remove: typeof import("./packages/ArrayUtils/remove").default;
    };
    CharUtils: {
        compare: typeof import("./packages/CharUtils/compare").default;
        isAscii: typeof import("./packages/CharUtils/isAscii").default;
        isAsciiAlpha: typeof import("./packages/CharUtils/isAsciiAlpha").default;
        isAsciiAlphaLower: typeof import("./packages/CharUtils/isAsciiAlphaLower").default;
        isAsciiAlphanumeric: typeof import("./packages/CharUtils/isAsciiAlphanumeric").default;
        isAsciiAlphaUpper: typeof import("./packages/CharUtils/isAsciiAlphaUpper").default;
        isAsciiControl: typeof import("./packages/CharUtils/isAsciiControl").default;
        isAsciiNumeric: typeof import("./packages/CharUtils/isAsciiNumeric").default;
        isAsciiPrintable: typeof import("./packages/CharUtils/isAsciiPrintable").default;
        isWhitespace: typeof import("./packages/CharUtils/isWhitespace").default;
        toChar: typeof import("./packages/CharUtils/toChar").default;
        toIntValue: typeof import("./packages/CharUtils/toIntValue").default;
        unicodeEscaped: typeof import("./packages/CharUtils/unicodeEscaped").default;
        unicodeUnescaped: typeof import("./packages/CharUtils/unicodeUnescaped").default;
    };
    DateUtils: {
        dateFormatHoc: typeof import("./packages/DateUtils/dateFormatHoc").default;
        getDatePeriod: (start: number, finish: number) => number;
        getDaysInMonth: (date: Date) => number;
        getFirstDateInMonth: (date: Date) => Date;
        getLastDateInMonth: (date: Date) => Date;
        isDate: typeof import("./packages/DateUtils/isDate").default;
        isLeapYear: (date: Date) => boolean;
        isTime: typeof import("./packages/DateUtils/isTime").default;
        timeFormatHoc: typeof import("./packages/DateUtils/timeFormatHoc").default;
    };
    DutyLink: typeof DutyLink;
    NumberUtils: {
        isFloat: typeof import("./packages/NumberUtils/isFloat").default;
        isInteger: typeof import("./packages/NumberUtils/isInteger").default;
    };
    ObjectUtils: {
        allNotNull: typeof import("./packages/ObjectUtils/allNotNull").default;
        isEmpty: (obj: object) => any;
    };
    StringUtils: {
        abbreviate: typeof import("./packages/StringUtils/abbreviate").default;
        contains: (target: string, str: string, separator?: string) => boolean;
        equals: typeof import("./packages/StringUtils/equals").default;
        equalsAny: typeof import("./packages/StringUtils/equalsAny").default;
        equalsAnyIgnoreCase: typeof import("./packages/StringUtils/equalsAnyIgnoreCase").default;
        equalsIgnoreCase: typeof import("./packages/StringUtils/equalsIgnoreCase").default;
        escapeHTML: (str: string) => string;
        getStrLength: (str: string, diff?: boolean, byte?: number) => number;
        isAnyEmpty: typeof import("./packages/StringUtils/isAnyEmpty").default;
        isEmpty: typeof import("./packages/StringUtils/isEmpty").default;
        isEN: (str: string) => boolean;
        isZH: (str: string) => boolean;
        length: typeof import("./packages/StringUtils/length").default;
        ltrim: typeof import("./packages/StringUtils/ltrim").default;
        rtrim: typeof import("./packages/StringUtils/rtrim").default;
        startsWith: typeof import("./packages/StringUtils/startsWith").default;
        strip: typeof import("./packages/StringUtils/strip").default;
        stripAll: typeof import("./packages/StringUtils/stripAll").default;
        stripEnd: typeof import("./packages/StringUtils/stripEnd").default;
        stripStart: typeof import("./packages/StringUtils/stripStart").default;
        stripToEmpty: typeof import("./packages/StringUtils/stripToEmpty").default;
        stripToNull: typeof import("./packages/StringUtils/stripToNull").default;
        substring: typeof import("./packages/StringUtils/substring").default;
        substringAfter: typeof import("./packages/StringUtils/substringAfter").default;
        substringAfterLast: typeof import("./packages/StringUtils/substringAfterLast").default;
        substringBefore: typeof import("./packages/StringUtils/substringBefore").default;
        substringBeforeLast: typeof import("./packages/StringUtils/substringBeforeLast").default;
        substringBetween: typeof import("./packages/StringUtils/substringBetween").default;
        substringsBetween: typeof import("./packages/StringUtils/substringsBetween").default;
        trim: typeof import("./packages/StringUtils/trim").default;
        trimToEmpty: typeof import("./packages/StringUtils/trimToEmpty").default;
        trimToNull: typeof import("./packages/StringUtils/trimToNull").default;
        truncate: typeof import("./packages/StringUtils/truncate").default;
        unescapeHTML: (str: string) => string;
        upperCase: (str: string) => string;
        wrap: typeof import("./packages/StringUtils/wrap").default;
        wrapIfMissing: typeof import("./packages/StringUtils/wrapIfMissing").default;
    };
    Utils: {
        createType: (type: string) => (value: any) => boolean;
        getURLValueByKey: (URL: string, key: string) => string;
        hasEmoji: (str: string) => boolean;
        isEmail: (str: string) => boolean;
        isIPv4: typeof import("./packages/Utils/isIPv4").default;
        isIPv4Range: typeof import("./packages/Utils/isIPv4Range").default;
        isIPv6: typeof import("./packages/Utils/isIPv6").default;
        isIPv6Range: typeof import("./packages/Utils/isIPv6Range").default;
        isMobile: (value: string | number) => boolean;
        isPhone: (value: string | number) => boolean;
        isPort: typeof import("./packages/Utils/isPort").default;
        isPostalCode: (value: string | number) => boolean;
        queryURLParams: (url: string) => any;
        validateTypeHoc: (type: string) => (value: any) => boolean;
    };
};
export default _default;
