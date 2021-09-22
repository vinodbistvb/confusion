import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = ( state = COMMENTS, action) =>{
    switch(action.type){
        case ActionTypes.ADD_COMMENTS:
            let comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toDateString();
            // alert("comment added is" + JSON.stringify(comment));
            return state.concat(comment);
        default:
            return state;
    }
}