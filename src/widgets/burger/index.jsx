import { useCallback, useState } from 'react'
import { ReactComponent as CrossIcon } from '../../shared/assets/icons/cross.svg'
import { ReactComponent as BurgerIcon } from '../../shared/assets/icons/burger.svg'
import s from './styles.module.scss'
import clsx from 'clsx'

export const Burger = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = useCallback(() => {
    setIsOpen((prev) => !prev)
  })

  return (
    <div>
      <button className={s.button} onClick={handleClick}>
        <BurgerIcon />
      </button>

      <div className={clsx(s.menu, isOpen && s.active)}>
        <a href='#howToPlay'>Как играть?</a>
        <a href='#phone'>Смартфон за отзыв</a>
        <a href='#notRF'>Если вы не в РФ</a>
        <a href='#gamehack'>Геймхаки</a>
        <a href='#merch'>Мерч</a>
        <a href='#feetback'>Обратная связь</a>
        <button onClick={handleClick}>
          <CrossIcon />
        </button>
      </div>
      <div className={clsx(s.back, isOpen && s.back_active)}></div>
    </div>
  )
}
