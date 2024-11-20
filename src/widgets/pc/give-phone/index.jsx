import clsx from 'clsx'
import s from './styles.module.scss'
import Photo from '../../../shared/assets/photo/give-phone.png'

export const GivePhonePC = () => {
  return (
    <div className={s.body}>
      <div className={s.img_body}>
        <img src={Photo} />
      </div>
      <div className={s.text_body}>
        <p className={clsx('title', s.title)}>Смартфон за отзыв</p>

        <p className={clsx('description_text', s.description_text)}>
          Напиши отзыв о нашей игре на и получи шанс выиграть смарфтон. Всё просто: заходи сюда и получи простые
          инструкции для двух шагов к подарку.
        </p>
      </div>
    </div>
  )
}
