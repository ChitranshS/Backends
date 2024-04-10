

function App() {
 return (
    <>
     <CardWrapper>
     <CardWrapper>
     <CardWrapper>
     <CardWrapper>
      <TitleWrapper title="Title 1"/>
     </CardWrapper>
     </CardWrapper>
     </CardWrapper>
     </CardWrapper>
     
    </>
  )
}
function CardWrapper({children})
{
  return (<div style={{
    border:"2px solid black",
    padding:"1em"
  }}>{children}</div>)
}
function TitleWrapper({title})
{
  return (<h1>{title}</h1>)
}
export default App
