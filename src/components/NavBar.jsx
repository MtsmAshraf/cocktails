import { useGSAP } from '@gsap/react'
import { navLinks } from '../../constants'
import gsap from 'gsap'
const NavBar = () => {

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top"
      }
    })

    navTween.fromTo("nav", {
      backgroundColor: "transparent"
    } , {
      backgroundColor: "#00000050",
      backdropFilter: "blur(5px)",
      duration: 0.5,
      ease: "power1.inOut"
    })
  }, [])
  return (
    // NOTE: in the index.css file we defined utilities and layers where there is layer of nav and its children
    // this means whenever we use a nav tag, the classes defined in the index.css will be automatically applied to them
      <nav>
        <div>
          <a href="#home" className='flex items-center gap-2'>
            <img src="./images/logo.png" alt="logo" />
            <p>Velvet Pour</p>
          </a>
          <ul>
            {
              navLinks.map((link, index) => {
                return(
                  <li key={index}>
                    <a href={`#${link.id}`} className='text-capitalize'>{link.title}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
    </nav>
  )
}

export default NavBar