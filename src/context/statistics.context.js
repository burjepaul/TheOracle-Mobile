import { createContext, useState, useCallback, useEffect } from "react";

export const StatisticsContext = createContext({
    statistics: {},
    setStatistics: () => null
})

export const StatisticsProvider = ({children}) => {
    const [statistics, setStatistics] = useState()
    const fetchStatistics = useCallback(async () => {
        const response = await fetch('https://fotbal.herokuapp.com/statistics')
        if (!response.ok){
            throw new Error('Something went wrong!')
        }
        const data = await response.json();
        setStatistics((data))
    }, []
    )
    
    useEffect(() => {
        fetchStatistics()
    },[fetchStatistics])

    const value = {statistics, setStatistics}

    return(
        <StatisticsContext.Provider value={value}>
            {children}
        </StatisticsContext.Provider>
    )
}