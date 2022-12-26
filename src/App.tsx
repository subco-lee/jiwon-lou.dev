/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { FC, useRef } from 'react'
import { Career, BlinkingArrow, Footer, Introduction } from './components'
import "./index.css";

const App: FC = () => {
  const careerRef = useRef<null | HTMLDivElement>(null)
  const footerRef = useRef<null | HTMLDivElement>(null)

  const clickToMoveCareer = () => {
    if (careerRef.current !== null) {
      careerRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const clickToMoveFooter = () => {
    if (footerRef.current !== null) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>
      <Introduction moveToCareer={clickToMoveCareer} />
      <div ref={careerRef}>
      <Career moveToFooter={clickToMoveFooter} />
      </div>
      <div ref={footerRef}>
      <Footer />
      </div>
    </div>
  )
}

export default App
