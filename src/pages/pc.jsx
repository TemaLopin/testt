import { FeetBackPC } from '../widgets/featback/pc'
import { GameHackPC } from '../widgets/gamehack/pc'
import { GivePhonePC } from '../widgets/give-phone/pc'
import { HowToPlayPC } from '../widgets/how-to-play/pc'
import { MerchPC } from '../widgets/merch/pc'
import { NotFromRussiaPC } from '../widgets/not-from-russia/pc'

export const PC = () => {
  return (
    <>
      <HowToPlayPC />
      <GivePhonePC />
      <NotFromRussiaPC />
      <GameHackPC />
      <MerchPC />
      <FeetBackPC />
    </>
  )
}
