'use client'

import Image from 'next/image'

const advisoryBoard = [
  {
    name: 'Dr. Emmanuel S. Pilli',
    title: 'Professor, Dept. of CS&E',
    org: 'MNIT Jaipur · QETCI Member',
    bio: 'Ph.D. IIT Roorkee. Expert in cybersecurity, cloud & IoT security, blockchain, and quantum computing.',
    image: '/emmanuel-pilli.jpg',
    linkedin: 'https://www.linkedin.com/in/emmanuelpilli',
    tags: ['Cybersecurity', 'Quantum Computing', 'IEEE Senior Member'],
  },
  {
    name: 'L. Venkata Subramaniam',
    title: 'IBM Quantum Distinguished Ambassador',
    org: 'Quantum India · IIT Delhi Alumnus',
    bio: 'IBM Master Inventor with 21K+ followers. Driving quantum education and adoption across India.',
    image: '/venkata-subramaniam.png',
    linkedin: 'https://www.linkedin.com/in/lvsubramaniam',
    tags: ['Quantum Computing', 'IBM Research', 'AI & ML'],
  },
]

const leadership = [
  {
    name: 'Sidharth Kumar',
    title: 'Founder & CEO',
    bio: 'Applied cybersecurity researcher and hackathon winner. Focused on AI and quantum error mitigation.',
    image: '/founder-2.jpeg',
    linkedin: '#',
    tags: ['Post-Quantum Cryptography', 'IBM Alumnus'],
  },
  {
    name: 'Vikramaditya Ohlyan',
    title: 'Co-Founder',
    bio: 'Focused on engineering foundation and strategic partnerships powering QNNX.',
    image: '/cofounder.jpeg',
    linkedin: '#',
    tags: ['Engineering', 'Strategy'],
  },
]

function Tag({ label }) {
  return (
    <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wide rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
      {label}
    </span>
  )
}

function PersonCard({ person, large = false }) {
  return (
    <div className="relative rounded-2xl border border-indigo-500/20 bg-[#0a081e]/60 backdrop-blur-xl p-6 md:p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-400/60 hover:shadow-[0_20px_60px_rgba(99,102,241,0.2)] overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="flex gap-4 items-start">
        <div className={`relative ${large ? 'w-16 h-16 md:w-18 md:h-18' : 'w-14 h-14'} rounded-xl overflow-hidden border-2 border-indigo-400/40 shrink-0`}>
          <Image src={person.image} alt={person.name} fill className="object-cover" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className={`text-indigo-100 font-bold ${large ? 'text-base md:text-lg' : 'text-sm'} leading-tight`}>
            {person.name}
          </h3>
          <p className="text-indigo-400 text-xs font-semibold">{person.title}</p>
          <p className="text-slate-500 text-[11px]">{person.org}</p>
        </div>

        {person.linkedin !== '#' && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center hover:bg-indigo-500/30 hover:border-indigo-500/60 transition"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#818cf8">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        )}
      </div>

      {/* Bio */}
      <p className="text-slate-400 text-sm leading-relaxed">
        {person.bio}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {person.tags.map((t) => <Tag key={t} label={t} />)}
      </div>
    </div>
  )
}

function SectionLabel({ label, icon }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-lg">{icon}</span>
      <span className="text-indigo-100 font-bold text-lg">{label}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/40 to-transparent ml-2" />
    </div>
  )
}

export default function TeamSection() {
  return (
    <section id="team" className="relative px-4 md:px-6 py-20 max-w-6xl mx-auto z-10">

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-5">
          <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
          The People Behind QNNX
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-100 mb-4">
          Leadership & Advisory Board
        </h2>

        <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          World-class researchers and innovators building quantum-grade security.
        </p>
      </div>

      {/* Founders */}
      <div className="mb-16">
        <SectionLabel label="Founding Team" icon="⚡" />

        <div className="grid gap-5 mt-6 sm:grid-cols-2">
          {leadership.map((p) => (
            <PersonCard key={p.name} person={p} large />
          ))}
        </div>
      </div>

      {/* Advisory */}
      <div className="mb-16">
        <SectionLabel label="Advisory Board" icon="🛡️" />

        <div className="grid gap-5 mt-6 sm:grid-cols-2">
          {advisoryBoard.map((p) => (
            <PersonCard key={p.name} person={p} />
          ))}
        </div>
      </div>

      {/* Office */}
      <div>
        <SectionLabel label="Our Office" icon="📍" />

        <div className="relative mt-6 rounded-2xl border border-indigo-500/20 bg-[#0a081e]/60 backdrop-blur-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center overflow-hidden">

          {/* Glow */}
          <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.15)_0%,transparent_70%)] pointer-events-none" />

          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/30 to-purple-600/30 border border-indigo-500/40 flex items-center justify-center shrink-0">
            📍
          </div>

          {/* Address */}
          <div className="flex-1">
            <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">
              Headquarters
            </p>
            <h3 className="text-xl font-bold text-indigo-100 mb-1">
              1, Knowledge Center
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Golf Course Road, Sector 53<br />
              Gurugram, Haryana — 122011<br />
              <span className="text-slate-500">India</span>
            </p>
          </div>

          {/* Button */}
          <a
            href="https://maps.app.goo.gl/C9hQpoHiM9FbhkPV7"
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:scale-105 hover:opacity-90 transition"
          >
            View on Maps
          </a>
        </div>
      </div>
    </section>
  )
}