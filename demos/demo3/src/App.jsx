import Input from './components/Input'
import { useImmer } from 'use-immer'

const App = ()=>{
    const [form, updateForm] = useImmer({
      name: ''
    })
    const handleChange= (e)=> {
      updateForm(draft => {
        draft.name = e.target.value
      })
    }

    return (
      <section>
        <Input label="第一个输入框" text={form.name} onChange={handleChange}/>
        <Input label="第二个输入框" text={form.name} onChange={handleChange}/>
      </section>
    )
}

export default App