import Header from "./Components/Header"
import NewTask from "./Components/NewTask"
import Task from "./Components/Task"
import { TaskProvider } from "./Context"
function App() {

  return (
    <div>
      <TaskProvider>
        <header>
          <Header />
          <NewTask />
        </header>
        <main>
          <Task />
        </main>
      </TaskProvider>
    </div>
  )
}

export default App
