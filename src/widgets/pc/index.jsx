import HowToPlayPhoto from '../../shared/assets/pc/howToPlay.png'
import Phone from '../../shared/assets/photo/give-phone.png'
import { FeetBackPC } from './feetback'
import { GameHackPC } from './gamehack'
import { GivePhonePC } from './give-phone'
import { HowToPlayPC } from './how-to-play'
import { MerchPC } from './merch'
import { NotFromRussiaPC } from './not-from-russia'

import s from './styles.module.scss'

export const PC_Version = () => {
  return (
    <div>
      <HowToPlayPC />
      <GivePhonePC />
      <NotFromRussiaPC />
      <GameHackPC />
      <MerchPC />
      <FeetBackPC />
    </div>
  )
}
