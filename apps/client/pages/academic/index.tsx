import {FC} from 'react';
import {useGetAcademics} from '../../API/academic/getAcademics';
import {AcademicsCard} from '../../components/Card/AcademicsCard';
import {CardContainer} from '../../styled/academics.styled';
import {AcademicDialog} from '../../components/Dialog/AcademicDialog';
import {AcademicDialogLogic} from '../../components/Dialog/dialogLogic';
import {MainSection, MainContainer} from "../../styled/home.styled";
import {useLocale} from "@myworkspace/system-design";
import Slideshow from "../../components/Slideshow/Slideshow";
import {SlideData} from "@myworkspace/system-design";
import SearchBox from "../../components/Search/Search";

const Academic: FC = () => {
  const {data} = useGetAcademics();
  console.log(data)
  const locale = useLocale()
  const slides = SlideData();
  const {isOpen, onClose, onOpen, OnSubmit, onChange} = AcademicDialogLogic();
  return (

    <MainContainer dir={locale}>
      <MainSection className="80vh" id={"start"}>
        <Slideshow slides={slides} autoplay={true} delay={4000} onClick={onOpen}/>
        {isOpen && (
          <AcademicDialog
            isOpen={isOpen}
            onSubmit={OnSubmit}
            handleClose={onClose}
            onChange={onChange}
          />
        )}
      </MainSection>
      <MainSection>
        <SearchBox/>
        <CardContainer>
          {data?.map((item, id) => (
            <AcademicsCard
              key={id}
              firstName={item.firstName}
              lastName={item.lastName}
              email={item.email}
              imageUrl={item.imageUrl}
              degree={item.degree}
              subject={item.subject}
              career={item.career}
              city={item.city}
            />
          ))}

        </CardContainer>
      </MainSection>
    </MainContainer>

  );
};
export default Academic;
