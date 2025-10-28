import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Code2, Folder, Play, ShieldCheck, Clock } from 'lucide-react';

const TabButton = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors ${
      active ? 'bg-white/15 text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'
    } border border-white/10`}
  >
    <Icon className="h-4 w-4" />
    {label}
  </button>
);

const ChatMock = () => (
  <div className="grid h-64 grid-rows-[1fr_auto] gap-3">
    <div className="space-y-3 overflow-hidden">
      {[
        { me: false, text: 'Welcome to Talk Tangle — creating secure room…' },
        { me: true, text: 'Inviting teammates and setting time-lock to 30 min.' },
        { me: false, text: 'AI Coach: Consider scanning dependencies for CVEs.' },
      ].map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: i * 0.05 }}
          className={`max-w-[80%] rounded-2xl border px-3 py-2 text-sm shadow ${
            m.me
              ? 'ml-auto border-violet-500/30 bg-violet-500/15'
              : 'border-white/10 bg-white/5'
          }`}
        >
          {m.text}
        </motion.div>
      ))}
    </div>
    <div className="flex items-center gap-2">
      <input
        placeholder="Type a secure message…"
        className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none"
      />
      <button className="rounded-xl bg-violet-500/90 px-3 py-2 text-sm hover:bg-violet-500">Send</button>
    </div>
  </div>
);

const CodeMock = () => (
  <div className="grid h-64 grid-rows-[1fr_auto] gap-3">
    <pre className="h-full overflow-auto rounded-xl border border-white/10 bg-black/60 p-3 text-xs text-violet-100">
{`// AI generated snippet (Node.js)\nconst http = require('http');\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, {'Content-Type': 'application/json'});\n  res.end(JSON.stringify({ ok: true, message: 'Hello from the sandbox' }));\n});\nserver.listen(3000, () => console.log('Running on :3000'));`}
    </pre>
    <div className="flex items-center gap-2">
      <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">
        <Play className="h-4 w-4" /> Run in Sandbox
      </button>
      <button className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
        <ShieldCheck className="h-4 w-4" /> Scan for vulns
      </button>
    </div>
  </div>
);

const FilesMock = () => (
  <div className="h-64 space-y-3 overflow-auto">
    {[
      { name: 'design-spec-v3.pdf', lock: 'Unlocks in 2h' },
      { name: 'api-contract.json', lock: 'Expires in 30m' },
      { name: 'watermarked-build.zip', lock: 'Forensic tag active' },
    ].map((f) => (
      <div key={f.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
        <div className="text-sm">{f.name}</div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-2 py-1 text-[10px] text-white/70">
          <Clock className="h-3 w-3" /> {f.lock}
        </div>
      </div>
    ))}
  </div>
);

const LivePreviewMock = () => {
  const [tab, setTab] = useState('chat');

  return (
    <section className="relative w-full bg-[#08080f] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold">In-room collaboration preview</h3>
            <p className="text-white/70">Chat, code, and files live together with buttery animations.</p>
          </div>
          <div className="flex gap-2">
            <TabButton icon={MessageSquare} label="Chat" active={tab === 'chat'} onClick={() => setTab('chat')} />
            <TabButton icon={Code2} label="Code" active={tab === 'code'} onClick={() => setTab('code')} />
            <TabButton icon={Folder} label="Files" active={tab === 'files'} onClick={() => setTab('files')} />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <AnimatePresence mode="wait">
            {tab === 'chat' && (
              <motion.div
                key="chat"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <ChatMock />
              </motion.div>
            )}
            {tab === 'code' && (
              <motion.div
                key="code"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <CodeMock />
              </motion.div>
            )}
            {tab === 'files' && (
              <motion.div
                key="files"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <FilesMock />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default LivePreviewMock;
