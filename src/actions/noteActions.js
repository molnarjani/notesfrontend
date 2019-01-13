import { FETCH_NOTES } from "./types";

export const fetchNotes = () => dispatch => {
  fetch("http://localhost:8000/notes/")
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: FETCH_NOTES,
        payload: data
      })
    );
};

// export const addExmaple = example => dispatch => {
//   fetch("http://localhost:8000/api/example/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(example)
//   })
//     .then(response => response.json())
//     .then(example =>
//       dispatch({
//         type: EXAMPLE,
//         payload: example
//       })
//     );
// };