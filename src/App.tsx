import './App.css'
import { StudentCard } from './features/labs/StudentCard'
import { Student } from './models'

function App() {
  const nghia: Student = {
    name: 'Tran Minh Nghia',
    age: 18,
    hobbyList: ['eat', 'code', 'sleep'],
    isHero: true,
  }

  return (
    <div className="App">
      <StudentCard student={nghia} />
    </div>
  )
}

export default App
