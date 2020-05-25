import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="h-screen pb-14 bg-right bg-cover" style={{backgroundImage: 'url("bg.svg")'}}>
        <div className="container pt-24 md:pt-32 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Ta com tempo? Aprenda no tap!</h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Tap Skill, a maneira mais fácil de usar seu tempo livre para aprender uma nova habilidade ! Tap Aqui!</p>
          </div>
          <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
            <img className="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="devices.svg" />
          </div>
          
        </div>
      </div>
  </Layout >
)

export default IndexPage
