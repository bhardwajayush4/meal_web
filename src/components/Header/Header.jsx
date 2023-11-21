import { useRef, useEffect } from 'react'
import { Container } from 'reactstrap'
import image from '../../assets/images/res-logo.png'
import { NavLink, Link } from 'react-router-dom'
import '../Header/Header.css'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { CartUiActions } from '../../store/shopping-cart/cart-Product'

const nav__Links = [
  {
    path: '/home',
    display: 'HOME',
  },
  {
    path: '/cart',
    display: 'CART',
  },
  {
    path: '/food',
    display: 'FOODS',
  },
  {
    path: '/contact',
    display: 'CONTACT',
  },
]

const Header = () => {
  const menuRef = useRef(null)
  const headRef = useRef(null)
  const totalQuantity = useSelector(state => state.cart.totalquantity)

  const dispatch = useDispatch();
  const togglehandler = () => {
    dispatch(CartUiActions.toggle())
  }

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headRef.current.classList.add('header__shrink')
      }
      else {
        headRef.current.classList.remove('header__shrink')
      }
      return () => window.removeEventListener('scroll')
    })
  }, [])

  return (
    <header className='header shadow-sm' ref={headRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={image} alt='' />
            <h5>Tasty Treat</h5>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__Links.map((item, index) => (
                <NavLink className={navClass => navClass.isActive ? 'active__menu' : ''} to={item.path} key={index}>{item.display}</NavLink>
              ))}
            </div>
          </div>

          <div className="nav__right d-flex align-items-center gap-5">
            <span className="cart__icon" onClick={togglehandler}>
              <i class="ri-shopping-basket-line"></i>
              <span className='cart__badge'>{totalQuantity}</span>
            </span>

            <span className='user'>
              <Link to='/login'>
                <i class="ri-user-line"></i>
              </Link>
            </span>

            <span className='mobile__menu' onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header