import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import i18n from 'i18next'
// import fuseSearch from '../pages/help/search'
import React, { useState } from 'react'
import Fuse from 'fuse.js'
import fuseSearchData from '../pages/search.json'
import classNames from 'classnames';
import { useRouter } from 'next/router';

// import ReactTypes from '@types/react';
import { FuseDataItem } from '../pages/help/search'

type LayoutProps = {
  children: React.ReactNode,
  className?: string,
  title?: string
}

export default function Layout({ className = '', children, title = i18n.t('label-title') }: LayoutProps) {
  const navs = (['home', 'start', 'about'])
  const [query, updateQuery] = useState('')
  const [results, updateResults] = useState<FuseDataItem[]>([])
  const router = useRouter();

  const fuseSearch = new Fuse(fuseSearchData, { keys: ['title', 'content'] })
  const isActive = (key: string) => router.pathname === `/${key}` || (router.pathname === '/' && key === 'home')
  console.log(router.pathname)


  function onSearch(e: React.ChangeEvent<HTMLInputElement>): void {
    updateQuery(e.target.value)
    if (!e.target.value) {
      updateResults([])
    }
  }

  function onKeyPress(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === 'Enter') {
      const re = fuseSearch.search(query).map(record => {
        return record.item
      }) || [];
      updateResults(re)
    }
  }



  return (
    <div className={`mx-auto ${className}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content="A free speed up tool, 免费加速器，日本" />
      </Head>

      <header className="absolute z-[100] w-full flex items-center p-10">
        <div className="flex items-center justify-center">
          <img src="logo-spot.png" alt="logo" className="w-8 h-8" />
          <span className="text-base pl-3 font-bold">{i18n.t('home-free-entry')}</span>
        </div>
        <nav className="pl-20">
          {navs.map((nav, index) => {
            return <Link key={index} tab-index="-1" className={classNames("p-5 cursor-pointer hover:font-bold", { 'font-bold': isActive(nav) })} href={nav == 'home' ? '/' : nav}>{i18n.t(`link-${nav}`)}</Link>
          })}
        </nav>
        <div className="justify-self-end ml-auto">
          {/* <span className="bg-[url('/public/search.svg')] w-3 h-3"></span> */}
          <input className="pl-2 border border-slate-400 rounded w-40 placeholder:text-primary-light placeholder:text-sm" type="text" value={query} onChange={onSearch} onKeyPress={onKeyPress} placeholder={i18n.t('label-search')} />
        </div>
      </header>
      {children}
      <footer className="flex-0 flex p-10 bg-primary text-gray-50 text-sm" >
        <div className="flex-1 flex items-center justify-center">
          <img src="logo.jpg" alt="logo" className="w-8 h-8" />
          <span className="text-base pl-3 font-bold">{i18n.t('home-free-entry')}</span>
        </div>
        <div className="flex-1 flex justify-center flex-col text-slate-50	">
          <Link className="leading-8 text-slate-50	" href="/about">{i18n.t('link-about')}</Link>
          <Link className="leading-8 text-slate-50	" href="/start">{i18n.t('link-start')}</Link>
          <Link className="leading-8 text-slate-50	" href="/help">{i18n.t('link-help')}</Link>
        </div>
        <div className="flex-1 flex justify-center flex-col">
          <Link className="leading-8 text-slate-50	" href="/">{i18n.t('link-privacy')}</Link>
          <Link className="leading-8 text-slate-50	" href="/">{i18n.t('link-terms')}</Link>
          <Link className="leading-8 text-slate-50	" href="/">{i18n.t('link-contact')}</Link>
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
