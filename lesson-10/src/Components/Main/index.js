import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Detail from '../../Detail';
import Home from '../Home';
import Ingridients from './../Ingridients/index';

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='/ingridients/' element={<Ingridients />} />
            </Routes>
        </div>
    );
};

export default Main;