import clsx from 'clsx'
import s from './styles.module.scss'

import Computer from '../../../shared/assets/photo/computer.png'

export const NotFromRussia = () => {
  return (
    <div className={s.body} id='notRF'>
      <p className={clsx('title', 'container', s.title)}>Если вы не в РФ</p>
      <div className={clsx('container', s.mobile_photo)}>
        <img src={Computer} alt='Если вы не в РФ' />
      </div>
      <div className={clsx('container', s.container)}>
        <p className={clsx('description_text', s.description_text)}>
          Находишься за пределами России, но хочешь стать обладателем нашей игры? Мы отправим её почтовой службой EMS.
          Финальную стоимость с учётом пересылки уточняйте в <a href='#'>чате</a>.
        </p>
        <p className={clsx('description_subtext', s.description_subtext)}>
          Наша игра финиширует на твоём адресе где бы ты ни был!
        </p>
      </div>
    </div>
  )
}
