import {useEffect, useState} from "react";
import axios from "axios";

export default function list() {
    const [informations, setInformation] = useState([]);
    useEffect(() => {
        getAll()
    }, [])
    const getAll = async () => {
        const result = await axios.get('http://localhost:8080/information');
        setInformation(result.data)
    }
    return (
        <>
            <h1>Vietnam's COVID-19 Information</h1>
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                </tr>
                </thead>
                <tbody>
                {
                    informations.map((information) => (
                        <tr key={information.id}>
                            <td>{information.date}</td>
                            <td>{information.confirmed}</td>
                            <td>{information.active}</td>
                            <td>{information.recovered}</td>
                            <td>{information.deaths}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}