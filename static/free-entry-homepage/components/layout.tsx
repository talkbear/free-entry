import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import i18n from 'i18next'
// import fuseSearch from '../pages/help/search'
import { useState } from 'react'
import Fuse from 'fuse.js'
import fuseSearchData from '../pages/search.json'

export default function Layout({ children, title = i18n.t('title') }) {
  const navs = (['home', 'about', 'downloads'])
  const [query, updateQuery] = useState('')
  const [results, updateResults] = useState([])

  let isActive = 0

  const fuseSearch = new Fuse(fuseSearchData, { keys: ['title', 'content'] })

  // const results = fuseSearch.search(query).forEach(record => {
  //   return record.item
  // }) || []


  function onSearch({ key, currentTarget }) {
    updateQuery(currentTarget.value)
    if (key === 'Enter') {
      const re = fuseSearch.search(query).map(record => {
        return record.item
      }) || []
      updateResults(re)
    }

  }



  return (
    <div className="mx-auto">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content="A free speed up tool, 免费加速器，日本" />
      </Head>

      <header className="flex items-center p-10">
        <div alt="logo" className="flex items-center justify-center">
          <img src="logo.jpg" alt="logo" className="w-8 h-8" />
          <span className="text-base pl-3 font-bold">{i18n.t('free-entry')}</span>
        </div>
        <nav className="pl-20">
          {navs.map((nav, index) => {
            return <Link tabIndex="-1" className="p-5 cursor-pointer hover:font-bold {{isActive ? font-bold : ''}}" href="/">{i18n.t(nav)}</Link>
          })}
        </nav>
        <div className="justify-self-end ml-auto">
          {/* <span className="bg-[url('/public/search.svg')] w-3 h-3"></span> */}
          <input className="pl-2 border border-slate-400 rounded w-40 placeholder:text-primary-light placeholder:text-sm" type="text" value={query} onChange={onSearch} onKeyPress={onSearch} placeholder={i18n.t('search')} />
        </div>
      </header>
      {children}
      <footer className="flex p-10 bg-primary text-gray-50 text-sm" >
        <div alt="logo" className="flex-1 flex items-center justify-center">
          <img src="logo.jpg" alt="logo" className="w-8 h-8" />
          <span className="text-base pl-3 font-bold">{i18n.t('free-entry')}</span>
        </div>
        <div className="flex-1 flex justify-center flex-col text-slate-50	">
          <Link className="leading-8 text-slate-50	" href="/">{i18n.t('about')}</Link>
          <Link className="leading-8 text-slate-50	" href="/">{i18n.t('downloads')}</Link>
          <Link className="leading-8 text-slate-50	" href="/">{i18n.t('help')}</Link>
        </div>
        <div className="flex-1 flex justify-center flex-col">
          <Link className="leading-8 text-slate-50	" href="/">{i18n.t('privacy')}</Link>
          <Link className="leading-8 text-slate-50	" href="/">{i18n.t('terms')}</Link>
          <Link className="leading-8 text-slate-50	" href="/">{i18n.t('contact')}</Link>
        </div>
      </footer>
      {
        results.length ?
          <aside className="absolute top-20 right-0 w-96 rounded flex p-10 bg-primary text-gray-50 text-sm" >
            <div className="flex-1 flex justify-center flex-col">{
              results.map((result, index) => {
                return <p key={index}>{result.content}</p>
              })
            }
            </div>
          </aside> : null
      }
    </div>
  )
}
