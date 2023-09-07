import {connect} from 'react-redux'
import {accelerate, brake} from '../Actions'
import './index.css'

const Speedometer = ({speed, speedUp, brea}) => {
  const onAccelerate = () => {
    speedUp(10)
  }

  const onbrake = () => {
    brea(10)
  }

  return (
    <div className="speedometer">
      <h1>Speed is {speed}mph</h1>
      <div>
        <button type="button" onClick={onAccelerate}>
          Accelerate
        </button>{' '}
        <button type="button" onClick={onbrake}>
          Apply Brake
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  speed: state,
})

const mapDispatchToProps = () => ({
  speedUp: accelerate,
  brea: brake,
})
export default connect(mapStateToProps, mapDispatchToProps)(Speedometer)
