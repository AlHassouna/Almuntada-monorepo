import {useGetSubjects} from "@lib/system-design";
import {useGetCompanies} from "@lib/system-design";
import {useGetCareers} from "@lib/system-design";
import {useMemo} from "react";
import {DataToSelectOptions} from "@lib/shared-hooks";

export const ListOptions = () => {
  const {data: subjectList} = useGetSubjects();
  const {data: companiesList} = useGetCompanies();
  const {data: careersList} = useGetCareers();


  const subjectsOptions = useMemo(() => (
    DataToSelectOptions(subjectList, "subject", "subject")
  ), [subjectList]);

  const companiesOptions = useMemo(() => (
    DataToSelectOptions(companiesList, "company", "company")
  ), [companiesList]);

  const careersOptions = useMemo(() => (
    DataToSelectOptions(careersList, "career", "career")
  ), [careersList]);


  return {
    subjectsOptions,
    companiesOptions,
    careersOptions
  };
};
