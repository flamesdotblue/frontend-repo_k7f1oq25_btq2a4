import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#06060a] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06060a]" />

      {/* Top bar */}
      <div className="relative z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-4 py-2 flex items-center gap-2 shadow-lg"
          >
            <Rocket className="h-5 w-5 text-violet-300" />
            <span className="font-semibold tracking-wide">Talk Tangle</span>
          </motion.div>

          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="hidden sm:inline-flex items-center gap-2 text-sm text-white/70">
              <Shield className="h-4 w-4" /> End-to-end focus
            </span>
            <span className="hidden sm:inline-flex items-center gap-2 text-sm text-white/70">
              <Users className="h-4 w-4" /> Up to 10 collaborators
            </span>
            <button className="rounded-xl bg-white/10 hover:bg-white/15 transition-colors border border-white/10 px-4 py-2 text-sm shadow-lg backdrop-blur-xl">
              Launch App
            </button>
          </motion.div>
        </div>
      </div>

      {/* Hero copy */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-6 pt-16 md:pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-balance text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
        >
          Secure, animated collaboration for code, chat, and calls
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="max-w-2xl text-lg text-white/80"
        >
          Spin up private rooms with encrypted chat, AI pair-programming, real-time code, and audiovisual presence. Destroy sessions instantly — with admin-grade traceability.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap items-center gap-3"
        >
          <button className="rounded-xl bg-violet-500/90 hover:bg-violet-500 transition-colors px-5 py-3 text-sm font-medium shadow-xl shadow-violet-500/20">
            Create a Secure Room
          </button>
          <button className="rounded-xl bg-white/10 hover:bg-white/15 transition-colors border border-white/10 px-5 py-3 text-sm font-medium backdrop-blur-xl">
            Explore Features
          </button>
          <span className="text-xs text-white/60">WebRTC • AI Codegen • Sandbox Runner</span>
        </motion.div>

        {/* Metrics */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:max-w-4xl">
          {[
            { label: 'Concurrent collaborators', value: '10' },
            { label: 'Latency target', value: '< 100ms' },
            { label: 'Crypto wipe', value: 'Instant' },
          ].map((m) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
            >
              <div className="text-2xl font-bold">{m.value}</div>
              <div className="text-xs text-white/70">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
