import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Shield, Users, PhoneCall, Video, Lock, Bug, Timer, Download, Cpu, Network } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'AI Code Generator',
    desc: 'Multi-language code generation with inline suggestions and explanations.',
    badge: 'LLM-powered',
  },
  {
    icon: Cpu,
    title: 'Sandbox Runner',
    desc: 'Run code safely in isolated containers with resource caps and logs.',
    badge: 'gVisor/Firecracker',
  },
  {
    icon: Users,
    title: 'Real-time Collaboration',
    desc: 'Live chat, presence, and cursor sync across editors and files.',
    badge: 'WebSockets',
  },
  {
    icon: PhoneCall,
    title: 'Audio Calls',
    desc: 'Low-latency spatial audio for up to 10 collaborators.',
    badge: 'WebRTC',
  },
  {
    icon: Video,
    title: 'Video Sharing',
    desc: 'Stream, screenshare, and spotlight presenters with smooth transitions.',
    badge: 'HD Adaptive',
  },
  {
    icon: Lock,
    title: 'Encryption & Self-Destruct',
    desc: 'E2E encrypted data with crypto-shredding for instant room wipe.',
    badge: 'Zero Trust',
  },
  {
    icon: Shield,
    title: 'Admin Audit & Traceability',
    desc: 'Hash-chained logs with selective creator identity visibility.',
    badge: 'Compliance',
  },
  {
    icon: Timer,
    title: 'Time-locked Messages',
    desc: 'Send files and messages that unlock or expire on a schedule.',
    badge: 'Policies',
  },
  {
    icon: Bug,
    title: 'Vulnerability Scan',
    desc: 'Static checks and AI hints to harden your code in real time.',
    badge: 'Security',
  },
  {
    icon: Download,
    title: 'Forensic Watermarking',
    desc: 'Identify leak sources with invisible, robust content tags.',
    badge: 'Forensics',
  },
  {
    icon: Network,
    title: 'Adaptive Low-bandwidth',
    desc: 'Graceful degradation, codec switching, and thumbnail streams.',
    badge: 'Resilient',
  },
];

const FeatureCard = ({ icon: Icon, title, desc, badge }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-lg"
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-violet-500/15 p-2 ring-1 ring-violet-500/30">
          <Icon className="h-5 w-5 text-violet-300" />
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      {badge && (
        <span className="rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-white/70">
          {badge}
        </span>
      )}
    </div>
    <p className="mt-3 text-sm text-white/75">{desc}</p>
  </motion.div>
);

const FeatureGrid = () => {
  return (
    <section className="relative w-full bg-[#0a0a12] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col gap-3">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold md:text-4xl"
          >
            Built for high-trust collaboration
          </motion.h2>
          <p className="max-w-2xl text-white/75">
            From real-time code to encrypted chat and calls, every interaction is designed with performance, security, and delight.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
