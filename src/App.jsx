import { useState } from 'react'
import './App.css'
import './index.css'
import { v4 as uuidv4 } from 'uuid'


function App() {
  const [newTodos, setNewTodos] = useState([])

  const [inputForm, setInputForm] = useState('')

  const handleChange = evt => {
    setInputForm(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    let todo = {
      _id: uuidv4(),
      content: inputForm
    }
    setNewTodos([...newTodos, todo])
    // Delete all text in input when submit
    setInputForm('')
  }


  return (
    <>
      <div className='header-form'>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit} className='new-form'>
          <input
            type="text" name='content' value={inputForm} autoComplete='off'
            onChange={handleChange}
          />
          <button className='btn' style={{ marginTop: '20px' }}>Add</button>
        </form>
      </div>
      <div>
        <ul className='todo-list'>
          {!newTodos.length
            ?
            <li>
              <p>Click <span style={{ fontWeight: 800, fontSize: '24px', padding: '0p' }}><i className="fa-solid fa-arrow-up"></i></span> to add new todo</p>

              <div className="list-info">
                <input type="checkbox" />
                <p>Check box</p>
              </div>
              <div className='list-info'>
                Click trash <span style={{ fontWeight: 800, fontSize: '24px', padding: '0p' }}><i className="fa-solid fa-arrow-down"></i></span> to delete
              </div>
              <button style={{ background: '#242424' }}> <i className="fa-solid fa-trash-can" style={{ color: 'orange' }}></i></button>
            </li>
            :
            <>
              {newTodos?.map(todo =>
                <li key={todo._id}>
                  <div className="list-info">
                    <input type="checkbox" />
                    <h2>{todo.content}</h2>
                  </div>
                  <button style={{ background: '#242424' }}> <i className="fa-solid fa-trash-can" style={{ color: 'red' }}></i></button>
                </li>
              )
              }
            </>
          }
        </ul>
      </div>
    </>
  )
}

export default App
