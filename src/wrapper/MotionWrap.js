import React from 'react'
import { motion } from 'framer-motion'

const MotionWrap = (Components, className) => function HOC () {
  return (
    <motion.div className={`${className} app__flex`} whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: 0.5 }}>
      <Components/>
    </motion.div>
  )
}

export default MotionWrap
