import useWindowDimensions from '../../shared/hooks/useWindowDimensions'
import { BGImage } from '../../shared/ui/bg-images'
import { Burger } from '../../widgets/header/mobile'
import { Footer } from '../../widgets/footer/mobile'
import { Header } from '../../widgets/header/pc'
import s from './styles.module.scss'
import { FooterPC } from '../../widgets/footer/pc'

export const MainLayout = ({ children }) => {
  const { width } = useWindowDimensions()

  if (!width) return null

  return (
    <>
      <div className={s.bg}>
        {width > 1024 ? <Header /> : <Burger />}
        {/* {width > 1200 && <BGImage />} */}
        <div className={s.container}>{children}</div>
        <div className={s.footer}>
          <div className={s.container}>{width > 1124 ? <FooterPC /> : <Footer />}</div>
        </div>
      </div>
    </>
  )
}
