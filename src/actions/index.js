export default class Action {

    static SELECT_LOCKER = 'SELECT_LOCKER'
    static GET_LOCKERS = 'GET_LOCKERS'

}

export const getLockers = () =>({
    type : Action.GET_LOCKERS
});

export const SelectLocker = (id,name) =>({
    type : Action.SELECT_LOCKER,
    id : id,
    name : name
});