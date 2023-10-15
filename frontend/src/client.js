import { useEffect } from "react"
import { json } from "react-router-dom"

export async function getAll() {
    const response = await fetch('/api/bingocards', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }});
    const json = await response.json()

    return json
}

export async function getOne(id) {
    const response = await fetch(`/api/bingocards/${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }});
    const json = await response.json()

    return json
}

export async function post(body) {
    const response = await fetch('/api/bingocards', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    const json = await response.json()

    return json
}
