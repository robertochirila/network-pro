import { NAVIGATE } from "./types";

export const navigate = (navData) => (dispatch) => {
  dispatch({
    type: NAVIGATE,
    payload: navData,
  });
};
