import { clsx } from 'clsx'
import s from './styles.module.scss'
import MerchPhoto from '../../shared/assets/photo/merch.png'
import { ReactComponent as Telegram } from '../../shared/assets/icons/telegram.svg'

export const Merch = () => {
  return (
    <div className={s.body} id='merch'>
      <p className={clsx('title', 'container', s.title)}>Мерч</p>
      <div className={clsx('container', s.mobile_photo)}>
        <img src={MerchPhoto} alt='Мерч' />
      </div>
      <div className={clsx('container', s.container)}>
        <p className={clsx('description_text', s.description_text)}>
          Мы уже придумали множество яркого мерча иллюстрациями из игры. <br /> Проголосуй за те, какие нам выпустить в
          первую очередь!
        </p>
      </div>
      <ul className={clsx('container', s.ul)}>
        <li>
          <p className='description_text'>картины финишей 50 на 50 см</p>
        </li>
        <li>
          <p className='description_text'>квадриптих “Четыре финиша”</p>
        </li>
        <li>
          <p className='description_text'>магниты на холодильник</p>
        </li>
        <li>
          <p className='description_text'>футбоки</p>
        </li>
      </ul>

      <div className={clsx('container', s.report)}>
        <p>Проголосовать →</p>
        <Telegram />
      </div>
    </div>
  )
}
