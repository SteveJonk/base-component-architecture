import { useState, useEffect } from "react";
import {RickMortyData} from "../types/RickMortyData.ts";

export const useFetch = (url: string) => {
    const [data, setData] = useState<RickMortyData>();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        };
        fetchData();
    }, [url]);
    return { data };
};