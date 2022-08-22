import React from 'react'
import style from "../styles/Spiner.module.css"


const Spinner = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.spiner}>
      {/* <img  src="img/loading.gif" alt="sppiner" /> */}
      </div>
    </div>
  )
}

export default Spinner