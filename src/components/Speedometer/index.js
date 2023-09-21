import {connect} from 'react-redux'
import {accelerate, brake} from '../Actions'
import './index.css'

// eslint-disable-next-line no-shadow
const Speedometer = ({speed, accelerate, brake}) => {
  const onAccelerate = () => {
    if (speed < 200) {
      accelerate(10)
    }
  }

  const onBrake = () => {
    if (speed > 0) {
      brake(10)
    }
  }

  return (
    <div className="speedometer">
      <h1>Speed is {speed}mph</h1>
      <div>
        <button type="button" onClick={onAccelerate}>
          Accelerate
        </button>{' '}
        <button type="button" onClick={onBrake}>
          Apply Brake
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  speed: state,
})

export default connect(mapStateToProps, {accelerate, brake})(Speedometer)
