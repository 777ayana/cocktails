import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DETAIL_COCTAIL_API } from '../Components/API';

const Detail = () => {
    const { id } = useParams()
    // console.log(params);
    const [info, setInfo] = useState({})

    const getDetailInfo = async () => {
        const req = await fetch(DETAIL_COCTAIL_API + id)
        const res = await req.json()
        setInfo(res.drinks[0]);

    }
    useEffect(() => {
        getDetailInfo()
    }, [])
    return (
        <div>
            <img src={info.strDrinkThumb} alt='' />

        </div>
    );
};

export default Detail;