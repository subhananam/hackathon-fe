import ITruckList from "src/Types/ITruckList"
import { TRANSPORTER_TRUCK_ADD, TRANSPORTER_TRUCK_UPDATE } from "../actionTypes"

export const updateTruck = (product : ITruckList) =>{
    return {
        type:TRANSPORTER_TRUCK_UPDATE,
        payload: {...product}
    }
}
export const addNewTruck = (product : ITruckList) =>{
    return {
        type:TRANSPORTER_TRUCK_ADD,
        payload: {...product}
    }
}