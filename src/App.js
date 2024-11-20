import { useEffect } from 'react'
import './App.css'
import { MainLayout } from './layouts'

import { PC_Version } from './widgets/pc'
import { FeetBack, Footer, GameHack, GivePhone, HowToPlay, Main, Merch, NotFromRussia } from './widgets'
import { WhereBuy } from './shared/ui/where-buy'

const tg = window.Telegram.WebApp

function App() {
  useEffect(() => {
    tg.ready()
  }, [])

  const onClose = () => tg.close()

  return (
    <MainLayout>
      <Main />
      {/* <PC_Version /> */}
      <HowToPlay />
      <GivePhone />
      <NotFromRussia />
      <GameHack />
      <Merch />
      <FeetBack />
      <WhereBuy />
      <Footer />
    </MainLayout>
  )
}

export default App
