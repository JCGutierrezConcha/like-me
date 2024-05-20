import { pool } from "../database/connection.js"

const findAll = async () => {
    const query = {
        text: 'SELECT * FROM POSTS ORDER BY id',
    }
    const { rows } = await pool.query(query)
    return rows
}

const create = async ({ usuario, url, descripcion, likes }) => {
    const query = {
        text: "INSERT INTO POSTS (usuario, url, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING * ",
        values: [usuario, url, descripcion, likes]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

const updateLike = async (id) => {
    const query = {
        text: "UPDATE POSTS SET likes = likes + 1 WHERE id= $1 RETURNING *",
        values: [id]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

export const modelLike = {
    findAll,
    create,
    updateLike
}