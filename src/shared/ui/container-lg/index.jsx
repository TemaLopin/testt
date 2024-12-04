import s from './styles.module.scss'

export const ContainerLG = ({ img, children, ...props }) => {
  return (
    <div className={s.body} {...props}>
      <div className={s.img_body}>
        <img src={img} />
      </div>
      <div className={s.text_body}>{children}</div>
    </div>
  )
}
