'use client'

import { useEffect } from "react"

const TestApi = () => {
  useEffect(() => {
    fetch('http://localhost:8080/api/home').then(
    response => response.json()
    ).then(data => {
      console.log(data)
    })
}, [])

  return (
    <div>test</div>
  )
}

export default TestApi
