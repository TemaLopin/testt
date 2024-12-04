import s from './styles.module.scss'

import PurpleArrow from './assets/purple-arrow.png'
import AnyObject from './assets/any-object.png'
import PinkArrow from './assets/pink-arrow.png'
import GreenBlock from './assets/green-block.png'
import PinkBlock from './assets/pink-block.png'
import GreenArrow from './assets/green-arrow.png'
import Lecarstva from './assets/lecarstva.png'
import BlueArrow from './assets/blue-arrow.png'

export const BGImage = () => {
  return (
    <>
      <div className={s.left}>
        <img className={s.purple_arrow} src={PurpleArrow} />
        <img className={s.any_object} src={AnyObject} />
        <img className={s.pink_arrow} src={PinkArrow} />
        <img className={s.green_block} src={GreenBlock} />
      </div>
      <div className={s.right}>
        <img className={s.pink_block} src={PinkBlock} />
        <img className={s.green_arrow} src={GreenArrow} />
        <img className={s.lecarstva} src={Lecarstva} />
        <img className={s.blue_arrow} src={BlueArrow} />
      </div>
    </>
  )
}
