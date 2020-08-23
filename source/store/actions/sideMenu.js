import { MENU_TOGGLE } from '../constants'

export const toggleMenu = () => dispatch => (
  dispatch({ type: MENU_TOGGLE })
)
