import { WhereBuyPC } from '../shared/ui/where-buy/pc'
import { FeetBackPC } from '../widgets/featback/pc'
import { GameHackPC } from '../widgets/gamehack/pc'
import { GivePhonePC } from '../widgets/give-phone/pc'
import { Header } from '../widgets/header/pc'
import { HowToPlayPC } from '../widgets/how-to-play/pc'
import { MainPC } from '../widgets/main/pc'
import { MerchPC } from '../widgets/merch/pc'
import { NotFromRussiaPC } from '../widgets/not-from-russia/pc'

export const PC = () => {
  return (
    <div style={{ padding: '50px 0px' }}>
      <MainPC />
      <HowToPlayPC />
      {/* <GivePhonePC /> */}
      <NotFromRussiaPC />
      <GameHackPC />
      <MerchPC />
      <FeetBackPC />
      <div style={{ width: '50%', margin: '150px auto' }}>
        <WhereBuyPC />
      </div>
    </div>
  )
}
