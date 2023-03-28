import {FlexCenter} from "../../styled/global.styled";

const StartSteps = ({number, text}) => (
  <FlexCenter className='flex-row gap-8'>
    <FlexCenter
      className='w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]'
    >
      <p className="font-bold text-[20px] text-[orange]">
        {number}
      </p>
    </FlexCenter>
    <FlexCenter
      className='w-[300px]'
    >
      <p className="flex-1 font-normal text-[18px] text-[#a32ed3] leading-[32.4px]">
        {text}
      </p>
    </FlexCenter>
  </FlexCenter>
);

export default StartSteps;
