/**
 * 去除两边空格
 *
 * @version 0.0.1
 * @param s 去除空格的字符串
 * @returns 返回去除空格后的字符串
 * @example
 *
 * ``` typescript
 * trim('  123  ')
 * ```
 */
export const trim = (s: string): string => {
  return s.replace(/(^\s*)|(\s*$)/g, '')
}

export const trimLeft = (s: string): string => {
  return s.replace(/(^\s*)/g, '')
}
