import {BrowserRouter, Navigate} from 'react-router-dom'
import {Routes, Route, NavLink} from 'react-router-dom'

import logo from '../logo.svg'
import {LazyPage1, LazyPage2, LazyPage3} from '../01-lazyload/pages'

export const Navigation = () => {
  return (
    <BrowserRouter>

    <div className="main-layout">
        <nav>
            <img src={logo} alt="React logo" />
        <ul>
            <li>
                <NavLink to="/lazy1" className={({isActive}) => isActive ? 'nav-active' : '' } >Home</NavLink>
            </li>
            <li>
                <NavLink to="/lazy2" className={({isActive}) => isActive ? 'nav-active' : '' } >About</NavLink>
            </li>
            <li>
                <NavLink to="/lazy3" className={({isActive}) => isActive ? 'nav-active' : '' } >Users</NavLink>
            </li>
        </ul>
        </nav>

        <Routes>
            <Route path="lazy1" element={<h1><LazyPage1 /></h1>}  />
            <Route path="lazy2" element={<h1><LazyPage2 /></h1>}  />
            <Route path="lazy3" element={<h1><LazyPage3 /></h1>}  />

            <Route path="/*" element={<Navigate to="/home" replace />}  />
        </Routes>

    </div>
    </BrowserRouter>
  )
}
