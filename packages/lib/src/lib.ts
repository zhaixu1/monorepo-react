export function add(a: number, b: number) {
  return a + b
}

export function minus(a: number, b: number) {
  return a - b
}

/**
 *  判断是否为undefined或者null
 * @param val 
 * @returns 
 */
export function isUndef(val: any) {
    console.log('is not dist');
    
    return val === undefined || val === null
}
