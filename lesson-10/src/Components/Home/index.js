import React, { useEffect, useState } from 'react';
import { ALLCOCTAILS_API, SEARCH_COCTAIL_BY_NAME } from '../API';
import Header from '../Header';
import Output from '../Output';

const Home = () => {
    const [data, setData] = useState([])



    const getAllCoctails = async () => {
        const req = await fetch(ALLCOCTAILS_API)
        const res = await req.json()
        setData(res.drinks);
        // console.log(res.drinks);
    }
    const getCocktailByName = async (name) => {
        const req = await fetch(SEARCH_COCTAIL_BY_NAME + name)
        const res = await req.json()
        setData(res.drinks);

    }
    useEffect(() => {
        getAllCoctails()
    }, [])
    return (
        <div>
            <Header all={getAllCoctails} search={getCocktailByName} />
            <Output data={data} />


        </div>
    );
};

export default Home;