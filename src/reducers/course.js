/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable default-case */
import {
    CREATE,
} from '../constants/actionTypes'

export default (course = {}, action) => {
    switch (action.type) {
        case CREATE:
            return action.payload;
        default:
            return course;
    }
};