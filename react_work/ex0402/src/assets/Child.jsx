import React, {useEffect} from 'react';

function Child(props) {

    console.log(props.children);

    useEffect(()=>{
        console.log('자식 useEffect');
    },[props.count]);
    return (
        <div>
            <h1>Child</h1>
        </div>
    );
}

export default Child;