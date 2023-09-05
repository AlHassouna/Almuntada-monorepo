import {motion} from 'framer-motion';
import {textVariant2} from '../../utils/motion';

export const TitleText = ({title, textStyles}) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-4 font-bold sm:text-[25px] text-[20px] text-[#faa717] ${textStyles}`}
  >
    {title}
  </motion.h2>
);
