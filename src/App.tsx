import { About } from './components/About'
import { NavBar } from './components/NavBar'
import { Profile } from './components/Profile'

function App() {
  // npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
  return (

    <div className='bg-primary'>
      <NavBar />
      <Profile />
      <About />
    </div>
  )
}

export default App
