import React, { useEffect } from "react"
import Router from "./router"
import useReactPath from "./hooks/useReactPath"

function App() {
  const loader = document.querySelector(".preloader")

  const showLoader = () => loader?.classList.remove("d-none")

  const hideLoader = () => loader?.classList.add("d-none")

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  let path = useReactPath()

  useEffect(() => {
    showLoader()
    sleep(500).then(() => {
      hideLoader()
    })
    // eslint-disable-next-line
  }, [path])
  return (
    <div className="App">
      <Router />
    </div>
  )
}

export default App
