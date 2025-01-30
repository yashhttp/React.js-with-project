import React from 'react'

function Price() {
  return (
    <div>
      <p>Old Price</p>
      <p>New Price</p>
      <Price/>

    
    </div>
  )
}

function Button(){
    console.log("Button click by yash saini")
    conosle.log("")
}
function App(){
    return (
        <>
        <button onClick={Button}> Click me</button>
        </>
    )
}

export default Price
