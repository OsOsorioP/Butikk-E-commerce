import { BrowserRouter } from 'react-router-dom'
import { Routers } from './utils/routers/Routers'
import { Suspense } from 'react'
import './App.css'
import { Loading } from './components/loading/Loading'
import { Navbar } from './components/navbar/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Navbar />
          <Routers />
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
