import React from 'react'
import { Route, Routes } from 'react-router'
import AuthPage from './pages/auth'
import HomePage from './pages/home'

function App() {
  const routes = [
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/auth",
      element: <AuthPage />
    },
  ]
  return (
    <div className='w-full h-screen'>
      <Routes>
        {routes.map(({path, element})=> (
          <Route 
            key={path} 
            path={path} 
            element={element} 
          />
        ))}
        <Route
          path="*"
          element={
            <div className="text-center pt-100p">
              <p className="fs-1 fw-bold">Oops there seem to be nothing here!</p>
            </div>
          }
        />
      </Routes>
    </div>
  )
}

export default App