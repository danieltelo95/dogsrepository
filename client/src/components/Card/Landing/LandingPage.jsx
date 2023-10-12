import React from "react"
import { Link } from 'react-router-dom'

export default function LandingPage () {
    return (
        <div>
            <h1>The Dog WebPage</h1>
            <Link to='/home'>
                <button>Entrar a la página! </button>
            </Link>
        </div>
    )
}