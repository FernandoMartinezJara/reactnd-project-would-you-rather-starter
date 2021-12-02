import { hideLoading, showLoading } from "react-redux-loading-bar";
import { getInitData } from "../utils/api";
import { getAuthedUsers } from "./users";
import { getQuestions } from "./question";
import { setAuthedUser } from "./authedUser";

 export function handleInitData() {
     return(dispatch) => {
         dispatch(showLoading())

         return getInitData()
            .then(({ users, questions }) => {
                const authedUser = sessionStorage.getItem('authedUser')?.toString();
                authedUser !== '' && !!authedUser && dispatch(setAuthedUser(authedUser))

                dispatch(getAuthedUsers(users));
                dispatch(getQuestions(questions));
                dispatch(hideLoading());
            });
     }
 }