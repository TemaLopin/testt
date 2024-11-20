import Byi from '../../shared/assets/photo/bui.png'
import Rot from '../../shared/assets/photo/rot.png'
import Tonel from '../../shared/assets/photo/tonel.png'
import clsx from 'clsx'

import Ahaha from '../../shared/assets/photo/ahaha.png'
import Like from '../../shared/assets/photo/like.png'

import s from './styles.module.scss'

export const HowToPlay = () => {
  return (
    <div className={s.body} id='howToPlay'>
      <p className={clsx('title', 'container', s.title)}>Как играть?</p>
      <div className={clsx('container', s.mobile_photo)}>
        <img src={Byi} alt='Взрывоопасный буй' />
        <img src={Rot} alt='Глубокий грот' />
        <img src={Tonel} alt='Запретный тоннель' />
      </div>
      <div className={clsx('container', s.container)}>
        <p className={clsx('description_title', s.description_title)}>В игре 4 финиша.</p>
        <p className={clsx('description_text', s.description_text)}>
          Каждый игрок выбирает понравившийся финиш. Выигрывает тот, кто приходит первым к своему. По пути – жиза,
          «случайные связи» и «Не та дверь». Проигравший надевает чёрную водолазку и извиняется.
          <img className={s.ahaha} src={Ahaha} alt='Ahahaha' />
        </p>
        <p className={clsx('description_subtext', s.description_subtext)}>
          Подойдёт для компании совершеннолетних друзей, которые умеют общаться на пикантные темы и готовы пошутить друг
          над другом и над собой
          <img className={s.like} src={Like} alt='Like' />
        </p>
      </div>
    </div>
  )
}
