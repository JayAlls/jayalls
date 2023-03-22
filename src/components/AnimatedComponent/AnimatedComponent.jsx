import { useSpring, animated } from 'react-spring'
import { useRef, useEffect } from 'react'

const AnimatedComponent = ({ children }) => {
  const ref = useRef(null)
  const [animation, setAnimation] = useSpring(() => ({
    transform: 'translateY(50px)',
    opacity: 0,
    transition: "all 0.5s ease-in-out",
  }))

  useEffect(() => {
    const onScroll = () => {
      const elementPosition = ref.current.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      if (elementPosition < windowHeight) {
        setAnimation({
          transform: 'translateY(0)',
          opacity: 1,
        })
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [ref, setAnimation])

  return (
    <animated.div style={animation} ref={ref}>
      {children}
    </animated.div>
  )
}


export default AnimatedComponent;