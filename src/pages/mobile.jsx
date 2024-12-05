import { FeetBack } from '../widgets/featback/mobile'
import { GameHack } from '../widgets/gamehack/mobile'
import { GivePhone } from '../widgets/give-phone/mobile'
import { HowToPlay } from '../widgets/how-to-play/mobile'
import { Merch } from '../widgets/merch/mobile'
import { NotFromRussia } from '../widgets/not-from-russia/mobile'
import { Burger } from '../widgets/header/mobile'
import { Main } from '../widgets/main/mobile'
import { WhereBuy } from '../shared/ui/where-buy/mobile'

export const Mobile = () => {
  return (
    <>
      <Main />
      <WhereBuy />
      <HowToPlay />
      {/* <GivePhone /> */}
      <NotFromRussia />
      <GameHack />
      <Merch />
      <FeetBack />
      <WhereBuy />
    </>
  )
}
