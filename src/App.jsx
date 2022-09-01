import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'



function App() {
  //const [feadback, setfeadback]=useState
  return (
    <>
    <Header />
    <div className='container'>
    <FeedbackItem/>
    </div>
    </>
  )
}

export default App