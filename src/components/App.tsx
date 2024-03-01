import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './App.module.scss'

export const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div>
      <NavLink to={'/'}>main</NavLink>
      <br />
      <NavLink to={'/about'}>about</NavLink>
      <br />
      <NavLink to={'/shop'}>shop</NavLink>
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
