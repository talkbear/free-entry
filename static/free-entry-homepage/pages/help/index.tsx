import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import i18next from 'i18next'
import { useState } from 'react'

export default function HelpIndex() {
  const [query, updateQuery] = useState('')

  function onSearch(e: React.ChangeEvent<HTMLInputElement>): void {
    updateQuery(e.target.value)
  }

  return (
    <Layout className="flex flex-col h-screen">
      <Head>
        <title>{i18next.t('link-help')}</title>
      </Head>
      <div className=" flex flex-col flex-1 items-center justify-even">
        <h1 className="m-32 text-4xl text-center">{i18next.t('label-help-center')}</h1>
        <input
          className="pl-2 border border-slate-400 rounded w-80 placeholder:text-primary-light placeholder:text-sm"
          type="text"
          value={query}
          onChange={onSearch}
          placeholder={i18next.t('label-search')} />
      </div>
    </Layout>

  )
}

