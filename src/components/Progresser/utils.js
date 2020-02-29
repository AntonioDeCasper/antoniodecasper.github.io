// @flow

export const isValueInList = (list: Array<string>, value: string) =>
  new Set(list).has(value);
