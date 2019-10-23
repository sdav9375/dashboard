import axios from 'axios'
import { useEffect, useState } from 'react'

export const useAxios = (url) => {
const [response, setResponse] = useState({data: null, loading: true})

  console.log('url', url)
  useEffect(() => {
    setResponse({data: null, loading: true})
    axios.get(url)
    .then(x => x.data)
    .then(y => {
      setResponse({data: y, loading: false})
    })
  }, [url])
console.log(response)
  return response
}