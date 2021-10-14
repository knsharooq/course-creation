import { CREATE } from '../constants/actionTypes';

export const createCourse = (course) => (dispatch) => {
    try {
        dispatch({ type: CREATE, payload: course })
    } catch (error) {
        console.log(error.message)
    }
}
