import { About } from './components/About'
import { Certificates } from './components/Certificates'
import { Contact } from './components/Contact'
import { NavBar } from './components/NavBar'
import { Profile } from './components/Profile'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  // npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
  return (

    <div className='bg-primary'>
      <NavBar />
      <Profile />
      <About />
      <Certificates />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
