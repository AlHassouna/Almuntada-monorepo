import { useGetSubjects } from "../../API/academic/getSubjects";
import { useGetCompanies } from "../../API/academic/getCompany";
import { useGetCareers } from "../../API/academic/getCareers";
import { useMemo } from "react";
import { dataToSelectOptions } from "@lib/shared-hooks";

export const ListOptions = () => {
  const { data: subjectList } = useGetSubjects();
  const { data: companiesList } = useGetCompanies();
  const { data: careersList } = useGetCareers();


  const subjectsOptions = useMemo(() => (
    dataToSelectOptions(subjectList, "subject", "subject")
  ), [subjectList]);

  const companiesOptions = useMemo(() => (
    dataToSelectOptions(companiesList, "company", "company")
  ), [companiesList]);

  const careersOptions = useMemo(() => (
    dataToSelectOptions(careersList, "career", "career")
  ), [careersList]);


  return {
    subjectsOptions,
    companiesOptions,
    careersOptions
  };
};