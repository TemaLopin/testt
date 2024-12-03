import clsx from 'clsx'

import Ahaha from '../../../shared/assets/photo/ahaha.png'
import Like from '../../../shared/assets/photo/like.png'

import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import Byi from '../../../shared/assets/photo/bui.png'
import Rot from '../../../shared/assets/photo/rot.png'
import Tonel from '../../../shared/assets/photo/tonel.png'
import Buhta from '../../../shared/assets/photo/buhta.jpeg'

import s from './styles.module.scss'

export const HowToPlayPC = () => {
  const slides = [Byi, Rot, Tonel, Buhta]
  const renderSlides = [...slides, ...slides, ...slides]

  return (
    <div className={s.body}>
      <div className={s.text_body}>
        <p className={clsx('title', s.title)}>Как играть?</p>
        <p className={clsx('description_title', s.description_title)}>В игре 4 финиша.</p>
      </div>
      <div className={s.img_body}>
        <Swiper
          slidesPerView={3}
          spaceBetween={300}
          className={'swiper-pc'}
          loop={true}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
        >
          {renderSlides?.map((slide) => (
            <SwiperSlide>
              <img src={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={s.description_body}>
        <p className={clsx('description_text', s.description_text)}>
          Каждый игрок выбирает понравившийся финиш. Выигрывает тот, кто приходит первым к своему. По пути – жиза,
          «случайные связи» и «Не та дверь». Проигравший надевает чёрную водолазку и извиняется. Подойдёт для двоих или
          компании совершеннолетних друзей, которые умеют общаться на пикантные темы и готовы пошутить друг над другом и
          над собой.
        </p>
        <p className={clsx('description_subtext', s.description_subtext)}>
          Подойдёт для двоих или компании совершеннолетних друзей, которые умеют общаться на пикантные темы и готовы
          пошутить друг над другом и над собой.
        </p>
      </div>
    </div>
  )
}
