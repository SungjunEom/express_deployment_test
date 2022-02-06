import React, { useState,useEffect } from 'react';
import {useParams} from "react-router-dom";

export default function ProductDetail() {
    const {params} = useParams();
    console.log(params);

    return (<div>
        <h1>Test</h1>
    </div>)
}