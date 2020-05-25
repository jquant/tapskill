import React from "react"
import { Link } from "gatsby"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"

import SlideComponent from "../components/slide"

const slidePage = () => {
    if (!isAuthenticated()) {
        login({returnTo:window.location.href})
        return <p>Redirecting to login...</p>
    }

    return (
        <SlideComponent />
    )
}

export default slidePage