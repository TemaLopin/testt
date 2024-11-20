import { clsx } from 'clsx'
import s from './styles.module.scss'
import Phone from '../../shared/assets/photo/give-phone.png'
import { ReactComponent as Telegram } from '../../shared/assets/icons/telegram.svg'
import WBSmall from '../../shared/assets/photo/wb-little.png'
import { ReactComponent as WBLittle } from '../../shared/assets/icons/wb-little.svg'

export const GivePhone = () => {
  return (
    <div className={s.body} id='phone'>
      <p className={clsx('title', 'container', s.title)}>Смартфон за отзыв</p>
      <div className={clsx('container', s.mobile_photo)}>
        <img src={Phone} alt='Phone' />
      </div>
      <div className={clsx('container', s.container)}>
        <p className={clsx('description_text', s.description_text)}>
          Напиши отзыв о нашей игре на <WBLittle className={s.wb} /> и получи шанс выиграть смарфтон. Всё просто: заходи
          сюда и получи простые инструкции для двух шагов к подарку.
        </p>
      </div>

      <div className={clsx('container', s.report)}>
        <p>Учавствовать →</p>
        <Telegram />
      </div>
    </div>
  )
}
