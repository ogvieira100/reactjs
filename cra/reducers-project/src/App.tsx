import Btn from './components/button'
import { ContextProvider } from './contexts/context';
import AuthCard from './components/authCard'

const App = () => {

  return (
    <ContextProvider>
      <div>
        <Btn></Btn>
        <AuthCard></AuthCard>
      </div>
    </ContextProvider>
  )

}

export default App;