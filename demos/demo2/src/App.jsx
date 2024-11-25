import Profile from './components/Profile'

const App = ()=>{
  
  const MyHeader = ()=> {
    return (
      <div>
      这是传入的header
      </div>
    )
   
  }
  const MyContent = ()=> {
    return (
      <div>
      这是传入的content
      </div>
    )
   
  }
  const MyFooter = ()=> {
    return (
      <div>
    这是传入的footer
    </div>
    )
    
  }

    return (
      <section>
        <Profile header={<MyHeader></MyHeader>}></Profile>
        <div>---------------------------------------</div>
        <Profile content={<MyContent></MyContent>}></Profile>
        <div>---------------------------------------</div>
        <Profile footer={<MyFooter></MyFooter>}></Profile>
      
      </section>
    )
}

export default App