export const dataToSelectOptions = <T>(dataList: T[], nameKey: keyof T, idKey: keyof T) => {
  return dataList?.map((item: T) => ({
    label: item[nameKey] as string,
    value: item[idKey] as string,
  }));
};



