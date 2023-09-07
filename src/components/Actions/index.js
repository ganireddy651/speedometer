export const accelerate = value => async dispatch => {
  dispatch({
    type: 'ACCELERATE',
    payload: value,
  })
}

export const brake = value => async dispatch => {
  dispatch({
    type: 'BRAKE',
    payload: value,
  })
}
