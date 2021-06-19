export type ActionsTypes = MaxValueType
    | StartValueType
    | CounterType
    | CounterActivateEditModeType
    | AddErrorMaxValueType
    | ResetCounterType
    | ChangeMaxValueType
    | ChangeStartValueType
    | CounterDeactivateEditModeType
    | DeleteErrorMaxValueType
    | AddErrorStartValueType
    | DeleteErrorStartValueType

type MaxValueType = ReturnType<typeof MaxValueAC>
type StartValueType = ReturnType<typeof StartValueAC>
type CounterType = ReturnType<typeof CounterAC>
type CounterActivateEditModeType = ReturnType<typeof CounterActivateEditModeAC>
type CounterDeactivateEditModeType = ReturnType<typeof CounterDeactivateEditModeAC>
type ResetCounterType = ReturnType<typeof ResetCounterAC>
type AddErrorMaxValueType = ReturnType<typeof AddErrorMaxValueAC>
type DeleteErrorMaxValueType = ReturnType<typeof DeleteErrorMaxValueAC>
type AddErrorStartValueType = ReturnType<typeof AddErrorStartValueAC>
type DeleteErrorStartValueType = ReturnType<typeof DeleteErrorStartValueAC>
type ChangeMaxValueType = ReturnType<typeof ChangeMaxValueAC>
type ChangeStartValueType = ReturnType<typeof ChangeStartValueAC>

export const MaxValueAC = (value: number) => {
    return {type: 'MAX_VALUE', value: value} as const
}
export const StartValueAC = (value: number) => {
    return {type: 'START_VALUE', value: value} as const
}
export const CounterAC = () => {
    return {type: 'COUNTER_INC'} as const
}
export const CounterActivateEditModeAC = () => {
    return {type: 'COUNTER_ACTIVATE_EDIT_MODE'} as const
}
export const CounterDeactivateEditModeAC = () => {
    return {type: 'COUNTER_DEACTIVATE_EDIT_MODE'} as const
}
export const ResetCounterAC = () => {
    return {type: 'RESET_INC'} as const
}
export const AddErrorMaxValueAC = () => {
    return {type: 'ADD_ERROR_MAX_VALUE'} as const
}
export const DeleteErrorMaxValueAC = () => {
    return {type: 'DELETE_ERROR_MAX_VALUE'} as const
}
export const AddErrorStartValueAC = () => {
    return {type: 'ADD_ERROR_START_VALUE'} as const
}
export const DeleteErrorStartValueAC = () => {
    return {type: 'DELETE_ERROR_START_VALUE'} as const
}
export const ChangeMaxValueAC = (value: number) => {
    return {type: 'CHANGE_MAX_VALUE', value: value} as const
}
export const ChangeStartValueAC = (value: number) => {
    return {type: 'CHANGE_START_VALUE', value: value} as const
}