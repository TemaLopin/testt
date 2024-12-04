import './App.css'
import 'swiper/css'
import 'swiper/css/navigation'

import { useEffect } from 'react'
import { MainLayout } from './layouts'
import useWindowDimensions from './shared/hooks/useWindowDimensions'

import { Mobile } from './pages/mobile'
import { PC } from './pages/pc'

const tg = window.Telegram.WebApp

function App() {
  const { width } = useWindowDimensions()

  useEffect(() => {
    tg.ready()
  }, [])


  const onClose = () => tg.close()

  return <MainLayout>{width > 1900 ? <PC /> : <Mobile />}</MainLayout>
}

export default App
