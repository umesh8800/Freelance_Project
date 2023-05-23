import React from 'react'
import Form from './Componets/Form'
import MyComponent from './Componets/MyComponent'
import store from './Store'
import {Provider} from 'react-redux';


function App() {
  return (
    <div>
     <Provider store={store}>
 <Form/>
 {/* <MyComponent/> */}
     </Provider>

    </div>
  )
}

export default App