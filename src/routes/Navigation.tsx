import {BrowserRouter, Navigate} from 'react-router-dom'
import {Routes, Route, NavLink} from 'react-router-dom'
import { routes } from './routes'

import logo from '../logo.svg'
import { Suspense } from 'react'

// import {LazyPage1, LazyPage2, LazyPage3} from '../01-lazyload/pages'

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
    <BrowserRouter>

    <div className="main-layout">
        <nav>
            <img src={logo} alt="React logo" />
        <ul>
            {
                routes.map(route => (
                    
            <li key={route.to}>
                <NavLink to={route.to} className={({isActive}) => isActive ? 'nav-active' : '' } >{route.name}</NavLink>
            </li>
                ))
            }
            {/* <li>
                <NavLink to="/lazy2" className={({isActive}) => isActive ? 'nav-active' : '' } >About</NavLink>
            </li>
            <li>
                <NavLink to="/lazy3" className={({isActive}) => isActive ? 'nav-active' : '' } >Users</NavLink>
            </li> */}
        </ul>
        </nav>

        <Routes>
            {
                routes.map(route => (
                    <Route
                    key={route.to} 
                    path={route.path} 
                    element={<route.Component />}
                    />
                ))
            }
            {/* <Route path="lazy1" element={<h1><LazyPage1 /></h1>}  />
            <Route path="lazy2" element={<h1><LazyPage2 /></h1>}  />
            <Route path="lazy3" element={<h1><LazyPage3 /></h1>}  /> */}

            <Route path="/*" element={<Navigate to={ routes[0].to} replace />}  />
        </Routes>

    </div>
    </BrowserRouter>
    </Suspense>
  )
}
