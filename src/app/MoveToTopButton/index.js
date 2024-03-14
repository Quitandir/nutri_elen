"use client"

import { StyledButton } from "./styles"
import { CaretCircleUp } from "@phosphor-icons/react"

const ScrollToTopButton = () => {

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <StyledButton

      onClick={scrollToTop}
    >
      <CaretCircleUp size={50} color="#e5ebdb" weight="fill" />
    </StyledButton>
  )
}

export default ScrollToTopButton