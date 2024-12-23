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

  return <MainLayout>{width > 1200 ? <PC /> : <Mobile />}</MainLayout>
}

export default App
