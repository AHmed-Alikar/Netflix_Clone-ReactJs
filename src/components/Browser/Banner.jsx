import React, { useEffect, useState } from 'react'
import requests from '../../request'
import axios from 'axios'

const Banner = () => {
  const [trading, setTranding] = useState([])

  useEffect(() => {
    console.log('Key',import.meta.env.VITE_API_KEY)
    const fetchNetflixOrignal = async () => {
      const data = await axios.get(requests.fetchNetflixOriginals)

    }
    fetchNetflixOrignal()

  }, [])
  return (
    <div></div>
  )
}

export default Banner