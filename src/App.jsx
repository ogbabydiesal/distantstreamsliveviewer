import './App.css'

function App() {
  return (
    <>
    <div id = "main">
      <div id = "header">
        <h1>Distant-Streams</h1>
      </div>
      <div id = "performances">
        <p>PST at Culture Hub @ 7pm EST and 4pm PST</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=UCuGq5GK9j1Zdapm4G2q9PBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
    <div id = "footer">
      <p>Development for Distant-Streams is supported by a 2025 <a href="https://culturehub.org">CultureHub</a> Residency.
      <br/> Programming and concept by <a href="https://thomasjohnmartinez.com">Tommy Martinez</a></p>  
    </div> 
      
    </>
  )
}

export default App
