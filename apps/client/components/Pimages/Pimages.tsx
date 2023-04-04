import {useIntl} from "react-intl";
import {useGetPimages} from "../../../../libs/system-design/src/lib/API/pimages/getPimages";
import Slideshow from '../Slideshow/Slideshow';

export const Pimages = () => {

  const intl = useIntl();
  const {data: imagesUrl} = useGetPimages()

  return (
    <div>
      <h1>{intl.formatMessage({id: 'pimages.title'})}</h1>
      <Slideshow slides={imagesUrl} autoplay={true} delay={5000}/>
    </div>
  )

}
