import axios from "axios"
import { useState, useRef, MutableRefObject } from "react"

function Login() {
  const name: MutableRefObject<HTMLInputElement | null> = useRef(null)
  const username: MutableRefObject<HTMLInputElement | null> = useRef(null)
  const password: MutableRefObject<HTMLInputElement | null> = useRef(null)
  const instance = axios.create({
    // headers: {"Access-Control-Allow-Origin": "*"},
    baseURL: 'http://localhost:3001/api'
  })

  const handleClick = async () => {
    try {
      instance.post('/signup', {
          name: name.current?.value,
          username: username.current?.value,
          password: password.current?.value
      })
    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    <div>
      <h1>Criar conta</h1>
      <label>name</label>
      <input ref={name} type="text" />
      <label>username</label>
      <input ref={username} type="text" />
      <label>senha</label>
      <input ref={password} type="password" />

      <button onClick={handleClick}>Entrar</button>
    </div>
  )
}

export default Login