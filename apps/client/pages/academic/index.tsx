import { FC } from 'react';
import { useGetAcademics } from '../../API/academic/getAcademics';

import { AcademicCreated } from '../../API/academic/types';
import { usePostAcademic } from '../../API/academic/postAcademic';

const Academic: FC = () => {
  const mockUser: AcademicCreated = {
    firstName: 'Sobhi',
    lastName: 'airi',
    email: 'hzdkv@example.com',
    imageUrl:
      'https://media.licdn.com/dms/image/C4D03AQF1zOe2Pjku0w/profile-displayphoto-shrink_800_800/0/1662553255489?e=1683763200&v=beta&t=ImifO4UEu38bxSOaGmgk2kUktQMWSd2a0eK6LReyvbU',
    age: 25,
    city: 'Bangalore',
    subject: 'asdasds',
    degree: 'asdasd',
    career: 'sharmatauser',
  };

  usePostAcademic(mockUser);

  const data = useGetAcademics();

  console.log(data, 'data');

  return <div>adsasdas</div>;
};
export default Academic;
