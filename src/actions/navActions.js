import { NAVIGATE } from "./types";

export const navigate = (navData) => (dispatch) => {
  console.log("2. Action dispatch nav");
  dispatch({
    type: NAVIGATE,
    payload: navData,
  });
};
