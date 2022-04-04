import axios from "axios"
import { useEffect, useState } from "react"

const useChartData = () => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        axios.get('data.json').then(data => setChartData(data.data))
    }, []);
    return [chartData, setChartData];
}

export default useChartData;