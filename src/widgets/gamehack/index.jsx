import clsx from 'clsx'
import s from './styles.module.scss'

import Hack from '../../shared/assets/photo/hack.jpeg'
import Svaz from '../../shared/assets/photo/svaz.png'
import Cards from '../../shared/assets/photo/cards.png'
import DoorLeft from '../../shared/assets/photo/door_green_arrow.png'
import DoorRight from '../../shared/assets/photo/door_rose_arrow.png'

export const GameHack = () => {
  return (
    <div className={s.body} id='gamehack'>
      <p className={clsx('title','container', s.title)}>Геймхаки</p>
      <div className='container'>
        <p className={clsx('description_text', s.description_text)}>
          Итак, вам нужно пройти от старта к финишу. Чтобы быстрее ориентироваться обращайте внимание на цвет стрелок в
          ячейках. <br /> <b> - зелёная стрелка </b> – двигаетесь вперёд,
          <br /> <b> - красная стрелка </b> –назад, <br /> В стрелках показано количество ходов, которые надо сделать.
          <br />
          Описание самих ячеек смотри в бумажных правилах.
        </p>
      </div>

      <div className={clsx('container', s.mobile_photo)}>
        <img src={Hack} alt='Геймхаки' />
      </div>

      <div className='container'>
        <p className={clsx('description_text', s.description_text)}>
          Приближаясь к участку <b> «случайные связи» </b> - подумайте: стоит <b> «применить презерватив» </b> перед
          броском кубика или пожертвовать <b> «лекарством» </b>, если другого выбора нет.
        </p>
      </div>

      <div className={clsx('container', s.block_photo_2)}>
        <img src={Cards} alt='Карты' />
        <img src={Svaz} alt='Случайные связи' />
      </div>

      <div className='container'>
        <p className={clsx('description_text', s.description_text, s.last_text)}>
          <b> Не та дверь.</b> Оказавшись на этом поле, нужно переместиться на маршрут, находящийся правее от тебя. Если
          находишься на крайнем правом маршруте, перемещайся на крайний левый маршрут.
        </p>
      </div>

      <div className={clsx('container', s.block_photo_3)}>
        <img src={DoorLeft} alt='Левая дверь' />
        <img src={DoorRight} alt='Правая дверь' />
      </div>

      <div className={clsx('container', s.container)}>
        <p className={clsx('description_subtext', s.description_subtext)}>
          Используй геймхаки на пути к победному финишу!
        </p>
      </div>
    </div>
  )
}
