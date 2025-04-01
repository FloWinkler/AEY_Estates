import { BrowserRouter } from 'react-router-dom';

import { Navbar, Hero, StarsCanvas, Essence, Collection, Services, Access } from './components';

const App = () => {

  return (<>
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar/>
        <div className="relative z-0">
          <Hero/>
          <StarsCanvas/>
        </div>
        <Essence/>
        <Collection/>
        <Services/>
        <div className="relative z-0">
          <Access/>
        </div>
        </div>
    </BrowserRouter>
    </>
  )
}

export default App
