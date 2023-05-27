import './App.css';
import ToDoTable from './components/todoTable/ToDoTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg from './bg.jpg'
function App() {
  return (
    <div className="App">
      <div style={{backgroundImage:{bg},width:"100%",height:"100%"}}>
      <ToDoTable/>
      
      </div>
      
    </div>
  );
}

export default App;
