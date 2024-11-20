import clsx from 'clsx'
import s from './styles.module.scss'
import Photo from '../../../shared/assets/photo/merch.png'

export const MerchPC = () => {
  return (
    <div className={s.body}>
      <div className={s.img_body}>
        <img src={Photo} />
      </div>
      <div className={s.text_body}>
        <p className={clsx('title', s.title)}>Мерч</p>

        <p className={clsx('description_text', s.description_text)}>
          Мы уже придумали множество яркого мерча иллюстрациями из игры. <br /> Проголосуй за те, какие нам выпустить в
          первую очередь!
        </p>
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
      </div>
    </div>
  )
}