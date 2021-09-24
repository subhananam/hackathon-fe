const initialState = {
    isOpen: false,
    type: "",
    message: "",
  };
  
  const auth = (state = initialState, action) => {
    switch (action.type) {
      case "ALERT_RESET":
        return {
          initialState,
        };
      case "ALERT_SET":
        return {
          ...state,
          isOpen: true,
          type: action.payload.type,
          message: action.payload.message,
        };
      default:
        return state;
    }
  };
  
  export default auth;