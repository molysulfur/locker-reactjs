import React from 'react';
import { connect } from 'react-redux'
import { SelectLocker } from '../actions'

const gridContainer = {
    display : 'grid',
    padding : '24px',
    margin : '24px',
    border: '2px solid red',
    borderRadius: '12px',
    gridTemplateColumns : 'auto auto auto'
}

const availableLocker = {
    backgroundColor : 'Green',
    color : 'white',
    padding : '16px',
    margin : '16px'
}

const alreadyLocker = {
    display : 'block',
    border: '2px solid',
}

const inputStyle = {
    padding : '16px'
}

const Lockers = ({lockers , dispatch}) =>{
    
    let input = ""
    const _lockers = lockers
    return(
        <div>
            Input your name : <input ref={node => input = node} style={inputStyle} placeholder="Input your name"/>
            <div style={gridContainer}>
                {_lockers.map((locker) =>{
                    if(locker.isSelect == false){
                        return(
                        <div className="col" style={alreadyLocker}>
                            <p>Locker ID : {locker.id}</p>
                            <p>Owner : {locker.name}</p>
                        </div>
                        );
                    }
                    return (
                    <div className="col">
                        <button style={availableLocker} onClick={() => dispatch(SelectLocker(locker.id,input.value))}>Locker ID : {locker.id}</button>
                    </div>
                    );
                })}
            </div>
        </div>
        );
}

const mapStateToProps = state => ({
    lockers: state.lockers
    })


export default connect(mapStateToProps)(Lockers);