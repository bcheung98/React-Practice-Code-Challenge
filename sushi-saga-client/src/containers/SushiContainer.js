import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi"

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushiData.map(sushi => <Sushi key={sushi.id} sushi={sushi} addPlate={props.addPlate} money={props.money} />)}
        <MoreButton nextPage={props.nextPage} />
      </div>
    </Fragment>
  )
}

export default SushiContainer