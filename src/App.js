import { useEffect } from 'react'
import './App.css'
import { MainLayout } from './layouts'

import { PC_Version } from './widgets/pc'

const tg = window.Telegram.WebApp

function App() {
  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => tg.close()

  return (
    <MainLayout>
      {/* <Main /> */}
      <PC_Version />
      {/*   <HowToPlay />
      <GivePhone />
      <NotFromRussia />
      <GameHack />
      <Merch />
      <FeetBack />
      <WhereBuy />
      <Footer /> */}
    </MainLayout>
  )
}

export default App
