import { Actions } from '../lib/constants.js'
import { fromJS, List } from 'immutable'
import Debug from 'debug'

const log = Debug('jl:queueReducer')

// state is array of guests
const initialState = new List()

export default function queueReducer (state = initialState, action) {

  // TODO: use global error reducer to catch all failure actions
  if (action.error) {

    log('error:', action.error)

  }

  switch (action.type) {


    case Actions.ADD_GUEST_SUCCESS:
      log('ADD_GUEST_SUCCESS:', action.guest)
      // Simply push the new guest to Immutable List
      return state.push(fromJS(action.guest))


    case Actions.GET_GUESTS_SUCCESS:
      log('GET_GUESTS_SUCCESS:', action.guests)
      // Replace existing queue with response guests
      return fromJS(action.guests)


    case Actions.NOTIFY_GUEST_SUCCESS:
      log('NOTIFY_GUEST_SUCCESS:', action.guest)
      // Find the List index of notified guest
      return state.update(
        state.findIndex((guest) => {

          return guest.get('guestId') === action.guest.guestId

        }),
        (guest) => {

          // Replace it entirely with response guest from Jumpline API
          return fromJS(action.guest)

        }
      )


    case Actions.COMPLETE_GUEST_SUCCESS:
      log('COMPLETE_GUEST_SUCCESS:', action.guest)
      // Find the List index of completed guest
      return state.update(
        state.findIndex((guest) => {

          return guest.get('guestId') === action.guest.guestId

        }),
        (guest) => {

          // Replace it entirely with response guest from Jumpline API
          return fromJS(action.guest)

        }
      )


    default:
      return state

  }

}
