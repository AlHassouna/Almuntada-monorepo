export const DataToSelectOptions = <T>(dataList: T[], nameKey: keyof T, idKey: keyof T) => {
  return dataList?.map((item: T) => ({
    label: item[nameKey] as string,
    value: item[idKey] as string,
  }));
};


export const DegreeToSelectOptions = <T>(dataList: T[], english: keyof T, hebrew: keyof T, arabic: keyof T) => {
  return dataList?.map((item: T) => ({
    label: item[english] as string,
    arabic: item[arabic] as string,
    hebrew: item[hebrew] as string,
  }));
}
