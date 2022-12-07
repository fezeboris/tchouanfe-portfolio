import React from 'react'
import { NavigationDots, SocialMedia } from '../components'
import { useTheme } from '../hooks/useTheme'
const AppWrap = (Component, idName, className) => function HOC () {
  const date = new Date()
  const year = date.getFullYear()
  const {mode } = useTheme()

  return <div id={idName} className={`app__container ${mode}  ${className}`}>
           <SocialMedia/>
           <div className='app__wrapper app__flex'>
             <Component/>
             <div className='copyright'>
               <p className={`p-text ${mode}`}>
                 @
                 {year} tchouanfe
               </p>
               <p className={`p-text ${mode}`}>
                 @All rights reserved
               </p>
             </div>
           </div>
           <NavigationDots active={idName} />
         </div>
}

export default AppWrap
