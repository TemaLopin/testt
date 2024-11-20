import { clsx } from 'clsx'
import s from './styles.module.scss'
import Message from '../../shared/assets/photo/message.png'

export const FeetBack = () => {
  return (
    <div className={s.body} id='feetback'>
      <p className={clsx('title', 'container', s.title)}>Обратная связь</p>
      <div className={clsx('container', 'container', s.mobile_photo)}>
        <img src={Message} alt='Message' />
      </div>
      <div className={clsx('container')}>
        <p className={clsx('description_text', s.description_text)}>
          Стань соавтором новой, еще более крутой версии игры, предложи свои идеи для улучшения игровых правил. <br />{' '}
          Залетай в <a href='#'> наш чат </a> и предлагай свои идеи как сделать игру еще интереснее, пикантнее,
          познавательнее.
        </p>
        <p className={clsx('description_text', s.description_text)}>
          Лучшие предложения мы обязательно учтем при создании следующей версии игры и щедро наградим авторов.
        </p>
      </div>
    </div>
  )
}
