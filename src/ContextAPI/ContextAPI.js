import React, { createContext, useContext, useState } from "react";

const ContextAPI = () => {
    
    const MyStore = createContext();

    const [name, setName] = useState('')

    return(
        <div>
            ContextAPI
            <MyStore.Provider value={{name: 'jack'}}>
                <MyStore.Consumer>
                    {(value) => {
                        return (<div>{value.name}</div>)
                    }}
                </MyStore.Consumer>
                {/* <MyStoreConsumer/> */}
            </MyStore.Provider>
        </div>
    )
}

// const MyStoreConsumer = () => {
//     const {name} = useContext(MyStore);
//     return(
//         <div>{name}</div>
//     )
//   }

export default ContextAPI;

// ContextAPI는 React 자체 상태관리 툴이고 가볍다,
// but, 변경이 매우 적게 일어나는 작은 데이터를 관리할 때 효율이 좋다.
// 조금만 변경이 잦거나 store가 많아지면 효율도 떨어지고 코드가 매우 지저분해짐