import React from 'react'
import { motion } from 'motion/react'
import { FcGoogle } from 'react-icons/fc'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../utils/firebase'
import axios from 'axios'
import { serverUrl } from '../App.jsx'
 

function Auth() {
  const handleGoogleAuth = async () => {
    try {
      const response = await signInWithPopup(auth, provider)
      const user = response.user
      const name = user.displayName
      const email = user.email
      const result = await axios.post(serverUrl + '/api/auth/google', { name, email }, { withCredentials: true })
      console.log(result.data)

    } catch (error) {
      console.error('Error signing in with Google:', error)
    }
  }


  return (
    <div className="min-h-screen overflow-hidden bg-white px-8 py-10 text-black">
      <motion.header
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="mx-auto mt-6 flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/80 px-8 py-6 shadow-[0_20px_45px_rgba(0,0,0,0.6)] backdrop-blur-xl"
      >
        <div>
          <h1 className="text-2xl font-bold text-white">Notik</h1>
          <p className="mt-1 text-sm text-gray-300">Sign in to continue</p>
        </div>
        <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black">
          Get Started
        </button>
      </motion.header>

      <main className="mx-auto max-w-7xl py-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="bg-gradient-to-br from-black/90 via-black/60 to-black/90 bg-clip-text text-5xl font-extrabold leading-tight text-transparent lg:text-6xl">
            Unlock Smart <br /> AI Notes
          </h1>

          <motion.button

            type="button"
            onClick={handleGoogleAuth}
            whileHover={{ y: -10, rotateX: 8, rotateY: -8, scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            className="mt-10 flex items-center gap-3 rounded-xl border border-white/10 bg-gradient-to-br from-black/90 via-black/80 to-black/90 px-10 py-3 text-lg font-semibold text-white shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
          >
            <FcGoogle size={22} />
            Continue with Google
          </motion.button>

          <p className="mt-6 max-w-xl text-lg text-gray-700">
            You get <span className="font-semibold">50 FREE credits</span> to create exam notes,
            project notes, charts, graphs and download clean PDFs - instantly using AI.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <Feature icon="✍️" title="50 Free Credits" desc="Start with 50 credits to generate notes without paying." />
          <Feature icon="📝" title="Exam Notes" desc="High-yield, revision-ready exam-oriented notes." />
          <Feature icon="📁" title="Project Notes" desc="Well-structured documentation for assignments and projects." />
          <Feature icon="📊" title="Charts & Graphs" desc="Auto-generated diagrams, charts and flow graphs." />
          <Feature icon="📄" title="Free PDF Download" desc="Download clean, printable PDFs instantly." />
        </div>
      </main>
    </div>
  )
}

function Feature({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -12, rotateX: 8, rotateY: -8, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-black/90 via-black/80 to-black/90 p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity hover:opacity-100" />
      <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
        <div className="text-3xl">{icon}</div>
        <h3 className="mt-3 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-300">{desc}</p>
      </div>
    </motion.div>
  )
}

export default Auth