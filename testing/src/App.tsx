import React from "react"
import CommentBox from "./components/CommentBox"

const App = () => {
  return (
    <div style={{ background: "#1a1a2b" }}>
      <p className='head-title' style={{ color: "white", padding: "10px" }}>
        Comment-Box
      </p>
      <hr style={{ borderTop: "1px solid white", width: "100%" }} />
      <div
        style={{
          margin: "auto",
          width: "50%",
          background: "#1a1a2b",
          padding: " 10px"
        }}
      >
        <CommentBox />
      </div>
    </div>
  )
}

export default App
