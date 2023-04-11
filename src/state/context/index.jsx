/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useReducer } from 'react'

import { RootModals } from '../../data'

const Context = createContext()


export const GlobalState = ({ children }) => {
    const [modals, updateModals] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, { ...RootModals })
    const [dashboardConfig, updateDashboardConfig] = useReducer((prev, next) => {
        return { ...prev, ...next }
    }, {
        activeLink: 'Inventory', showSideBar: true,
    })

    return (
        <Context.Provider value={{
            modals,
            updateModals,
            dashboardConfig,
            updateDashboardConfig,
        }}>
            {children}
        </Context.Provider>
    )
}


export const useGlobalState = () => useContext(Context)