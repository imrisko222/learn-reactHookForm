import { useForm } from 'react-hook-form'
import './App.css'

function App() {
const { register, handleSubmit } = useForm();
const onSubmit = (data) => console.log(data);
  return (
    <div>
<form onSubmit={handleSubmit(onSubmit)}>
  <input { ...register('username' )} />
  <input type="submit" />
</form>
    </div>

  )
}

export default App
