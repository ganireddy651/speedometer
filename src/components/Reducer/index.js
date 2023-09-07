const speed = 0

const reducer = (state = speed, action) => {
  const {type, payload} = action

  switch (type) {
    case 'ACCELERATE':
      return state + payload
    case 'BRAKE':
      return state + payload
    default:
      return state
  }
}

export default reducer
