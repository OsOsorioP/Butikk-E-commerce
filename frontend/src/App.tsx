import { BrowserRouter } from 'react-router-dom'
import { Routers } from './utils/routers/Routers'
import { Suspense } from 'react'
import './App.css'
import { Loading } from './components/loading/Loading'
import { Navbar } from './components/navbar/Navbar'
import ScrollTop from './components/scrolltop/ScrollTop'
import { Box } from '@mui/material'

function App() {

  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <Box
              component={'div'}
              sx={{
                position:'fixed',
                top:'40%',
                left:'50%',
                margin: 'auto'
              }}>
              <Loading />
            </Box>
          }>
          <Navbar />
          <Routers />
          <ScrollTop />
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
