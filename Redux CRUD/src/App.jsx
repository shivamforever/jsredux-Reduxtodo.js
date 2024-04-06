import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {
  return (
    <>
      <div className="app container">
        <div className='inputbox'>
          <TaskInput />
        </div>
        <div className='listbox'>
          <TaskList />
        </div>
      </div>
    </>
  )
}

export default App
