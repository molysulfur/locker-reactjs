import Action from '../actions';

function lockerReducer(state = [], action){
    console.log(state)
    switch(action.type){
        case Action.UNLOCK: 
        state.map({})
        return {
            id: state.id,
            isSelect : true
        }
        case Action.SELECT_LOCKER: {
            var newState = []
            state.map((locker)=>{
                if(locker.id === action.id){
                    var updateLocker = {
                        id : locker.id,
                        name : action.name,
                        isSelect : false
                    }
                    newState = [...newState,updateLocker]
                }else{
                    newState = [...newState,locker]
                }
            })
            return newState
        }
        case Action.GET_LOCKERS: return {
            lockers : state.lockers
        }
        default : return state;
    }
}

export default lockerReducer;