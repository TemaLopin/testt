import './App.css'
import 'swiper/css'
import 'swiper/css/navigation'

import { useEffect } from 'react'
import { MainLayout } from './layouts'
import useWindowDimensions from './shared/hooks/useWindowDimensions'

import { Mobile } from './pages/mobile'
import { PC } from './pages/pc'

const mainPathName = '4finisha.ru'

function App() {
  const { width } = useWindowDimensions()

  useEffect(() => {
    const hostname = window.location.hostname

    if (hostname === 'localhost') return
    if (hostname === mainPathName) return

    window.location.hostname = mainPathName
  }, [])

  return <MainLayout>{width > 1200 ? <PC /> : <Mobile />}</MainLayout>
}

export default App
