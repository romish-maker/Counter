import {ActionsTypes} from "./action";

export type StateType = {
    maxValue: number
    startValue: number
    counter: number
    counterEditMode: boolean
    errorMaxValue: boolean
    errorStartValue: boolean
}

export const initialState: StateType = {
    maxValue: 5,
    startValue: 0,
    counter: 0,
    counterEditMode: false,
    errorMaxValue: false,
    errorStartValue: false
}

export const reducer = (state: StateType = initialState, action: ActionsTypes): StateType => {
    switch (action.type) {
        case 'COUNTER_INC':
            return {
                ...state,
                counter: state.counter + 1
            } as const
        case 'RESET_INC':
            return {
                ...state,
                counter: state.counter = state.startValue
            }
        case 'CHANGE_MAX_VALUE': {
            localStorage.setItem('maxValue', JSON.stringify(action.value))
            return {
                ...state,
                maxValue: state.maxValue = action.value
            }
        }
        case 'CHANGE_START_VALUE':
            localStorage.setItem('startValue', JSON.stringify(action.value))
            return {
                ...state,
                startValue: state.startValue = action.value
            }
        case 'COUNTER_ACTIVATE_EDIT_MODE':
            return {
                ...state,
                counterEditMode: state.counterEditMode = true
            }
            // Повторение true or false, исправить, чтобы приходило в ActionCreator
        case 'COUNTER_DEACTIVATE_EDIT_MODE':
            return {
                ...state,
                counterEditMode: state.counterEditMode = false
            }
        case 'ADD_ERROR_MAX_VALUE':
            return {
                ...state,
                errorMaxValue: state.errorMaxValue = true
            }
        case 'DELETE_ERROR_MAX_VALUE':
            return {
                ...state,
                errorMaxValue: state.errorMaxValue = false
            }
        case 'ADD_ERROR_START_VALUE':
            return {
                ...state,
                errorStartValue: state.errorStartValue = true
            }
        case 'DELETE_ERROR_START_VALUE':
            return {
                ...state,
                errorStartValue: state.errorStartValue = false
            }
        case 'START_VALUE':
            return {
                ...state,
                startValue: state.startValue = action.value
            }
        case 'MAX_VALUE':
            return {
                ...state,
                maxValue: state.maxValue = action.value
            }
        default:
            return state;
    }
}
