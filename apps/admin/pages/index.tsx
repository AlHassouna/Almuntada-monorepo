import type {NextPage} from 'next'
import {AdminLayout} from '../layout/index'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faMars,
  faVenus,
} from '@fortawesome/free-solid-svg-icons'
import {
  Card, ProgressBar,
} from 'react-bootstrap'
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'
import React from 'react'
import {useGetAcademics, useGetVisitors} from '@lib/system-design'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Tooltip, Filler)
const Home: NextPage = () => {
  const {data: academics} = useGetAcademics()
  const {data: visitors} = useGetVisitors()

  const [visitorsData, setVisitorsData] = React.useState([])
  const [academicsData, setAcademicsData] = React.useState([])
  const [locationDate, setLocationData] = React.useState<Array<object>>([])
  const [males, setMales] = React.useState([]);
  const [females, setFemales] = React.useState([]);
  React.useEffect(() => {
    if (visitors) {
      setVisitorsData(visitors)
    }
  }, [visitors])

  React.useEffect(() => {
    if (academics) {
      setAcademicsData(academics)
      const maleData = academics.filter(person => person?.gender === 'Male')
      const femaleData = academics.filter(person => person?.gender === 'Female')
      const cities = academics.map((person) => person?.city)
      setMales(maleData)
      setFemales(femaleData)
      const citiesCount = cities?.reduce((acc: any, curr: any) => {
          acc[curr] ? acc[curr]++ : acc[curr] = 1
          return acc
        }
        , {})
      setLocationData(Object.entries(citiesCount))

    }
  }, [academics])


  const [pagesCount, setPagesCount] = React.useState([])
  React.useEffect(() => {
      const pages = visitorsData?.map((visitor: any) => visitor?.pathname)
      const pagesCount = pages?.reduce((acc: any, curr: any) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1
        return acc
      }, {})
      setPagesCount(Object.values(pagesCount))
    }
    , [visitorsData])

  console.log(locationDate)

  return (
    <AdminLayout>
      <div className="row flex justify-content-center">
        <div className="col-sm-6 col-lg-3">
          <Card bg="primary" text="white" className="mb-4">
            <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
              <div>
                <div className="fs-4 fw-semibold">
                  {academicsData?.length}
                </div>
                <div>Academics</div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-6 col-lg-3">
          <Card bg="info" text="white" className="mb-4">
            <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
              <div>
                <div className="fs-4 fw-semibold">
                  {visitorsData?.length}
                </div>
                <div>Visitors</div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <Card>
            <Card.Header>
              Genders &amp; Traffic &amp; Location
            </Card.Header>
            <Card.Body>
              <div className="row">
                <div className="col-sm-12">
                  {/*Gender */}
                  <div className="mb-5">
                    <div className="mb-3">
                      <div className="d-flex mb-1">
                        <div>
                          <FontAwesomeIcon className="me-2" icon={faMars} fixedWidth/>
                          Male
                        </div>
                        <div className="ms-auto fw-semibold">
                          {
                            `${males.length / academicsData.length * 100 || 0}%`
                          }
                        </div>
                      </div>
                      <ProgressBar
                        className="progress-thin"
                        variant="warning"
                        now={
                          males.length / academicsData.length * 100 || 0
                        }
                      />
                    </div>

                    <div className="mb-3">
                      <div className="d-flex mb-1">
                        <div>
                          <FontAwesomeIcon className="me-2" icon={faVenus} fixedWidth/>
                          Female
                        </div>
                        <div className="ms-auto fw-semibold">{
                          `${females.length / academicsData.length * 100 || 0}%`
                        }</div>
                      </div>
                      <ProgressBar
                        className="progress-thin"
                        variant="warning"
                        now={females.length / academicsData.length * 100 || 0}
                      />
                    </div>
                  </div>
                  {/*Traffic*/}
                  <div className="mb-5">
                    <div className="mb-3">
                      <div className="d-flex mb-1">
                        <div>
                          Homepage
                        </div>
                        <div className="ms-auto fw-semibold me-2">
                          {
                            `${(pagesCount[0] / visitorsData.length * 100).toFixed(2)}%`
                          }
                        </div>
                        <div className="text-black-50 small">{
                          `(${pagesCount[0] || 0})`
                        }</div>
                      </div>
                      <ProgressBar
                        className="progress-thin"
                        variant="success"
                        now={pagesCount[0] / visitorsData.length * 100 || 0}
                      />
                    </div>

                    <div className="mb-3">
                      <div className="d-flex mb-1">
                        <div>
                          Academic Page
                        </div>
                        <div className="ms-auto fw-semibold me-2">{
                          `${(pagesCount[1] / visitorsData.length * 100).toFixed(2)}%`
                        }</div>
                        <div className="text-black-50 small">{
                          `(${pagesCount[1] || 0})`
                        }</div>
                      </div>
                      <ProgressBar
                        className="progress-thin"
                        variant="success"
                        now={pagesCount[1] / visitorsData.length * 100 || 0}
                      />
                    </div>

                    <div className="mb-3">
                      <div className="d-flex mb-1">
                        <div>
                          Podcast Page
                        </div>
                        <div className="ms-auto fw-semibold me-2">{
                          `${(pagesCount[2] / visitorsData.length * 100).toFixed(2)}%`
                        }</div>
                        <div className="text-black-50 small">{
                          `(${pagesCount[2] || 0})`
                        }</div>
                      </div>
                      <ProgressBar
                        className="progress-thin"
                        variant="success"
                        now={pagesCount[2] / visitorsData.length * 100 || 0}
                      />
                    </div>

                    <div className="mb-3">
                      <div className="d-flex mb-1">
                        <div>
                          Contact Us
                        </div>
                        <div className="ms-auto fw-semibold me-2">{
                          `${(pagesCount[3] / visitorsData.length * 100).toFixed(2)}%`
                        }</div>
                        <div className="text-black-50 small">{
                          `(${pagesCount[3] || 0})`
                        }</div>
                      </div>
                      <ProgressBar
                        className="progress-thin"
                        variant="success"
                        now={pagesCount[3] / visitorsData.length * 100 || 0}
                      />
                    </div>
                  </div>
                  {/*Location*/}
                  <div className="mb-5">
                    {
                      locationDate && locationDate.map((item, index) => (
                        <div key={index} className="mb-3">
                          <div className="d-flex mb-1">
                            <div>
                              {item[0]}
                            </div>
                            <div className="ms-auto fw-semibold me-2">
                              {
                                `${(item[1] / academicsData.length * 100).toFixed(2)}%`
                              }
                            </div>
                            <div className="text-black-50 small">{
                              `(${item[1] || 0})`
                            }</div>


                          </div>
                          <ProgressBar
                            className="progress-thin"
                            variant="error"
                            now={locationDate[index][1] / academicsData.length * 100 || 0}
                          />
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>

              <br/>
            </Card.Body>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}
export default Home
