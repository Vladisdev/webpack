import Image from '@/assets/app-image.svg'
import avatarJpg from '@/assets/avatar.jpg'
import avatarPng from '@/assets/avatar.png'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './App.module.scss'

const TODO = (arg: number) => console.log('TODO')

export const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  if (__PLATFORM__ === 'desktop') {
    return <div>DESKTOP</div>
  }

  if (__PLATFORM__ === 'mobile') {
    return <div>MOBILE</div>
  }

  return (
    <div>
      <h1>PLATFORM={__PLATFORM__}</h1>
      <NavLink to={'/'}>main</NavLink>
      <br />
      <NavLink to={'/about'}>about</NavLink>
      <br />
      <NavLink to={'/shop'}>shop</NavLink>
      <img src={avatarPng} alt='' width={100} height={100} />
      <img src={avatarJpg} alt='' width={100} height={100} />
      <div>
        <Image style={{ color: 'red' }} width={50} height={50} />
      </div>
      <Outlet />
      <h1 className={styles.value}>{count}</h1>
      <button className={styles.btn} onClick={increment}>
        +
      </button>
      <button className={styles.btn} onClick={decrement}>
        -
      </button>
    </div>
  )
}
