import React from 'react'
import featuresData from '../../content/features.json'
import Feature from './Feature'

const Features = () => {
  
  return (
      <div>
          {
              featuresData.map(feature => (
                  <Feature key={feature.alt} {...feature} />
              ))
          }
    </div>
  )
}

export default Features