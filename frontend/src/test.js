import {useEffect} from "react";
import {json} from "react-router-dom";

async function getAll() {
    const response = await fetch('/api/bingocards', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }});
    const json = await response.json();

    return json;
}

async function getOne(id) {
    const response = await fetch(`/api/bingocards/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }});
    const json = await response.json();

    return json;
}

async function POST(body) {
    const response = await fetch('/api/bingocards', {
        method: 'POST',
            headers: {
        'Accept': 'application/json',
    },
        body: JSON.stringify(body)
    });
    const json = await response.json();

    return json;
}
