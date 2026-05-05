import { useState } from 'react'
import Section from './Section'

const TYPES = ['Semua Tipe', 'Villa', 'Rumah Cluster', 'Kavling', 'Komersial']

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [type,  setType]  = useState(TYPES[0])

  return (
    <Section className="bg-cream py-8 px-6 shadow-lg shadow-green-600/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center
                        bg-green-100 rounded-2xl sm:rounded-full p-2 gap-2">
          <div className="flex items-center flex-1 gap-3 bg-white rounded-xl sm:rounded-full
                          px-5 py-3">
            <span className="text-green-500 text-lg">🔍</span>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Cari properti, lokasi, atau tipe rumah..."
              className="flex-1 bg-transparent outline-none text-sm text-gray-700
                         placeholder:text-gray-400 font-body"
            />
          </div>

          <div className="hidden sm:block w-px h-7 bg-green-300/50 self-center" />

          <select
            value={type}
            onChange={e => setType(e.target.value)}
            className="bg-white sm:bg-transparent outline-none text-sm text-gray-600
                       font-body px-4 py-3 rounded-xl sm:rounded-full cursor-pointer
                       border border-green-200 sm:border-none"
          >
            {TYPES.map(t => <option key={t}>{t}</option>)}
          </select>

          <button className="bg-green-600 text-white text-sm font-semibold
                             px-7 py-3 rounded-xl sm:rounded-full
                             hover:bg-green-400 active:scale-95
                             transition-all duration-200 whitespace-nowrap">
            Cari Sekarang
          </button>
        </div>

        {/* Quick filters */}
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {['Panel Surya', 'Daur Ulang Air', 'Material Alami', 'Cluster Hijau', 'Harga Terbaik'].map(tag => (
            <span
              key={tag}
              className="bg-white border border-green-200 text-green-700 text-xs
                         font-medium px-3 py-1 rounded-full cursor-pointer
                         hover:bg-green-600 hover:text-white hover:border-green-600
                         transition-all duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}
