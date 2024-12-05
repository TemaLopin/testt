import clsx from 'clsx'
import s from './styles.module.scss'
import Photo from '../../../shared/assets/photo/merch.png'
import { ContainerLG } from '../../../shared/ui/container-lg'
import { ReactComponent as Telegram } from '../../../shared/assets/icons/telegram.svg'

export const MerchPC = () => {
  return (
    <ContainerLG img={Photo} id={'merch'}>
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
        <li>
          <p className='description_text'>стикеры на телефон</p>
        </li>
        <li>
          <p className='description_text'>стереомагниты с иллюстрацей финишей с GIF эффектом</p>
        </li>
      </ul>
      <div className={clsx(s.report)}>
        <p>Проголосовать →</p>
        <Telegram />
      </div>
    </ContainerLG>
  )
}
