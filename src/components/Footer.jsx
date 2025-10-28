import React from 'react';
import { motion } from 'framer-motion';
import { Github, Shield, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#06060a] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-violet-300" />
              <span className="font-semibold">Talk Tangle</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/70">
              A futuristic, secure collaboration platform blending AI, realtime, and delightful motion. Built for high-trust teams.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:col-span-2 md:grid-cols-3">
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">Platform</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Chat & Rooms</li>
                <li>AI Code & Runner</li>
                <li>Files & Calls</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">Trust</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Encryption</li>
                <li>Audit Logs</li>
                <li>Traceability</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">Resources</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Docs</li>
                <li>Security</li>
                <li>Status</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Talk Tangle. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">
              <Github className="h-4 w-4" /> Repo
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10">
              <Shield className="h-4 w-4" /> Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
