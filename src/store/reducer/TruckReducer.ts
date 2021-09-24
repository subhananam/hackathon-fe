import TruckListDummy from "src/Dummy/TruckListDummy";
import ITruckList from "src/Types/ITruckList";
import { TRANSPORTER_TRUCK_ADD, TRANSPORTER_TRUCK_UPDATE } from "../actionTypes";
const initialState : Array<ITruckList> = [...TruckListDummy]

interface Action{
  type : string;
  payload : ITruckList;
}

const TruckReducer = (state = initialState, action : Action) => {
  console.log("Hello",action)
  switch (action.type) {
    case TRANSPORTER_TRUCK_UPDATE:
      return state.map(s=> s.id === action.payload.id ? action.payload : s);
    case TRANSPORTER_TRUCK_ADD:
      return [
          ...state,
          action.payload
      ]
    default:
      return state
  }
}

export default TruckReducer
