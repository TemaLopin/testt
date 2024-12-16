import s from './styles.module.scss'
import { ReactComponent as BorderBottom } from '../../assets/icons/bottom-border.svg'

export const ContainerLG = ({ img, children, ...props }) => {
  return (
    <>
      <div className={s.body} {...props}>
        <div className={s.img_body}>
          <img src={img} />
        </div>
        <div className={s.text_body}>{children}</div>
      </div>
      <BorderBottom className={s.border} />
    </>
  )
}
