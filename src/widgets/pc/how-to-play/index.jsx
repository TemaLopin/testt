import clsx from 'clsx'

import Ahaha from '../../../shared/assets/photo/ahaha.png'
import Like from '../../../shared/assets/photo/like.png'
import HowToPlayPhoto from '../../../shared/assets/pc/howToPlay.png'

import s from './styles.module.scss'

export const HowToPlayPC = () => {
  return (
    <div className={s.body}>
      <div className={s.img_body}>
        <img src={HowToPlayPhoto} />
      </div>
      <div className={s.text_body}>
        <p className={clsx('title', s.title)}>Как играть?</p>
        <p className={clsx('description_title', s.description_title)}>В игре 4 финиша.</p>
        <p className={clsx('description_text', s.description_text)}>
          Каждый игрок выбирает понравившийся финиш. Выигрывает тот, кто приходит первым к своему. По пути – жиза,
          «случайные связи» и «Не та дверь». Проигравший надевает чёрную водолазку и извиняется. Подойдёт для двоих или
          компании совершеннолетних друзей, которые умеют общаться на пикантные темы и готовы пошутить друг над другом и
          над собой.
        </p>
        <p className='description_subtext'>
          Подойдёт для двоих или компании совершеннолетних друзей, которые умеют общаться на пикантные темы и готовы
          пошутить друг над другом и над собой.
        </p>
      </div>
    </div>
  )
}
