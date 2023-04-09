import {motion} from 'framer-motion';
import {textVariant2} from '../../utils/motion';

export const TitleText = ({title, textStyles}) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[44px] text-[40px] text-orange-500 ${textStyles}`}
  >
    {title}
  </motion.h2>
);
