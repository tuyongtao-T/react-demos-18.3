import Heading from "./contextComponent/Heading.jsx"
import Section from "./contextComponent/Section.jsx"

const App = () => {
  return (
    <Section>
      <Heading>主标题</Heading>
      <Section >
        <Heading>副标题</Heading>
        <Heading>副标题</Heading>
        <Heading>副标题</Heading>
        <Section >
          <Heading>子标题</Heading>
          <Heading>子标题</Heading>
          <Heading>子标题</Heading>
          <Section>
            <Heading>子子标题</Heading>
            <Heading>子子标题</Heading>
            <Heading>子子标题</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  )
}

export default App
