import React, {
  PropsWithChildren, useCallback, useEffect, useState,
} from 'react'
import {useResizeDetector} from 'react-resize-detector'
import Head from 'next/head'
import Sidebar, {SidebarOverlay} from './Sidebar/Sidebar'
import {Container} from 'react-bootstrap'
import {deleteCookie, getCookie, setCookie} from "cookies-next";
import axios from "axios";
import {useRouter} from "next/router";

export default function AdminLayout({children}: PropsWithChildren) {
  // Show status for xs screen
  const router = useRouter();
  const [isShowSidebar, setIsShowSidebar] = useState(false)

  // Show status for md screen and above
  const [isShowSidebarMd, setIsShowSidebarMd] = useState(true)

  const toggleIsShowSidebar = () => {
    setIsShowSidebar(!isShowSidebar)
  }

  const resetIsShowSidebar = () => {
    setIsShowSidebar(false)
  }

  const onResize = useCallback(() => {
    resetIsShowSidebar()
  }, [])

  const {ref} = useResizeDetector({onResize})

  // On first time load only
  useEffect(() => {
    if (localStorage.getItem('isShowSidebarMd')) {
      setIsShowSidebarMd(localStorage.getItem('isShowSidebarMd') === 'true')
    }
  }, [setIsShowSidebarMd])

  const inValidJwt = () => {
    deleteCookie('jwt')
    router.push('/login')
  }

  useEffect(() => {
    const jwt = getCookie('jwt')
    if (!jwt) {
      router.push('/login')
    } else {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/validate`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${jwt}`
        },
      }).then(res => {
        if (res.status === 200) {
          setCookie('jwt', jwt, {
            maxAge: 60 * 60 * 24 * 30,
            path: '/',
            sameSite: true,
          })
        }
      }).catch(() => {
        inValidJwt()
      })
    }

  }, [])


  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>

      <div ref={ref} className="position-absolute w-100"/>

      <Sidebar isShow={isShowSidebar} isShowMd={isShowSidebarMd}/>

      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        {/*<Header toggleSidebar={toggleIsShowSidebar} toggleSidebarMd={toggleIsShowSidebarMd}/>*/}
        <div className="body flex-grow-1 px-sm-2 my-4">
          <Container fluid="lg">
            {children}
          </Container>
        </div>
      </div>

      <SidebarOverlay isShowSidebar={isShowSidebar} toggleSidebar={toggleIsShowSidebar}/>
    </>
  )
}
