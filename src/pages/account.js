import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()
  console.log("user",user)
  return (
    <>
      <Layout>
        <div className="w-screen flex justify-center">

          <div className="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white">
            <div className="relative mb-6">
              <img className="w-full" src={user.picture} alt="Profile picture" />
              <div className="text-center absolute w-full" style={{bottom: '-30px'}}>
                <div className="mb-10" >
                  <p className="text-white tracking-wide uppercase text-lg font-bold">{user.name}</p>
                  <p className="text-gray-400 text-sm">@{user.nickname}</p>
                </div>
              </div>
            </div>
            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
              <p className="font-bold">Atenção</p>
              <p>Assinatura expirada. Acesse <Link to="/account/billing/">Billing</Link> para verificar detalhes.</p>
            </div>
            <div className="py-10 px-6 text-center tracking-wide grid grid-cols-2 gap-6">
              <div className="posts">
                <p className="text-lg">324</p>
                <p className="text-gray-400 text-sm"> <Link to="/slide">STapCursos Concluídos</Link></p>
              </div>
              <div className="followers">
                <p className="text-lg">3</p>
                <p className="text-gray-400 text-sm">Diplomas</p>
              </div>
            </div>
          </div>
        </div>

        {/* <Link to="/account/">Home</Link>{" "}
        <Link to="/account/settings/">Settings</Link>{" "}
        
        <Link to="/slide">SLIDE</Link>{" "} */}
        
      </Layout>
      <Router>
        <Settings path="/account/settings" />
        <Billing path="/account/billing" />
      </Router>
    </>
  )
}

export default Account