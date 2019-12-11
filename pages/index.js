import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
// import { useRouter } from 'next/router'

import Nav from '../components/nav'

// const router = useRouter()
const Home = () => (
  <div>
    <h1>HomePage</h1>
    <h1>
      <Link href='/blog'>
      <a>Blog</a>
      </Link>
    </h1>
  </div>
)

export default Home
