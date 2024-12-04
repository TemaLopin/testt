import clsx from 'clsx'

import Ahaha from '../../../shared/assets/photo/ahaha.png'
import Like from '../../../shared/assets/photo/like.png'

import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import Byi from '../../../shared/assets/gif/byi.gif'
import Rot from '../../../shared/assets/gif/grot.gif'
import Tonel from '../../../shared/assets/gif/tonel.gif'
import Buhta from '../../../shared/assets/gif/buhta.gif'

import s from './styles.module.scss'

export const HowToPlay = () => {
  const slides = [Byi, Rot, Tonel, Buhta]
  const renderSlides = [...slides, ...slides, ...slides]

  return (
    <div className={s.body} id='howToPlay'>
      <p className={clsx('title', 'container', s.title)}>Как играть?</p>
      <div className={s.mobile_photo}>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          className={'swiper-pc'}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            300: {
              slidesPerView: 2.5,
            },
            500: {
              slidesPerView: 3,
            },
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
