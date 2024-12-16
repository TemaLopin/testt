import s from './styles.module.scss'
import Photo from '../../../shared/assets/photo/hack.png'
import Card from '../../../shared/assets/photo/cards.png'
import Svaz from '../../../shared/assets/photo/svaz.png'
import DoorLeft from '../../../shared/assets/photo/door_green_arrow.png'
import DoorRight from '../../../shared/assets/photo/door_rose_arrow.png'
import { ReactComponent as BorderBottom } from '../../../shared/assets/icons/bottom-border.svg'
import clsx from 'clsx'

export const GameHackPC = () => {
  const rainbowWords = '«СЛУЧАЙНЫЕ СВЯЗИ»'.split('').map((word) => (word !== ' ' ? <span>{word}</span> : ' '))

  return (
    <>
      <div className={s.body} id={'gamehack'}>
        <div className={s.img_body}>
          <img style={{ borderRadius: 10 }} src={Photo} />
          <div>
            <img src={Card} />
            <img src={Svaz} />
          </div>
          <div>
            <img src={DoorRight} />
            <img style={{ transform: 'scaleX(-1)' }} src={DoorLeft} />
          </div>
        </div>
        <div className={s.text_body}>
          <p className={clsx('title', s.title)}>Геймхаки</p>

          <p className={clsx('description_text', s.description_text)}>
            Итак, вам нужно пройти от старта к финишу. Чтобы быстрее ориентироваться обращайте внимание на цвет стрелок
            в ячейках.
          </p>
          <p className={clsx('description_text', s.description_text)}>
            <b className={s.green_color}> - зелёная стрелка </b> – двигаетесь вперёд, <br />{' '}
            <b className={s.red_color}> - красная стрелка </b> –назад,
            <br /> В стрелках показано количество ходов, которые надо сделать. <br /> Описание самих ячеек смотри в
            бумажных правилах.
          </p>
          <p className={clsx('description_text', s.description_text)}>
            Приближаясь к участку <b className={s.rainbow}>{rainbowWords}</b> - подумайте: стоит применить{' '}
            <b className={s.blue_color}> «ПРЕЗЕРВАТИВ» </b> перед броском кубика или пожертвовать{' '}
            <b className={s.red_color}> «ЛЕКАРСТВОМ» </b>, если другого выбора нет.
          </p>
          <p className={clsx('description_text', s.description_text)}>
            <b>Не та дверь. </b> Оказавшись на этом поле, нужно  переместиться на маршрут, находящийся правее от тебя.
            Если находишься на крайнем правом маршруте, перемещайся на крайний левый маршрут.
          </p>
          <p className={clsx('description_subtext', s.description_subtext)}>
            Используй геймхаки на пути к победному финишу!
          </p>
        </div>
      </div>
      <BorderBottom className={s.border} />
    </>
  )
}
