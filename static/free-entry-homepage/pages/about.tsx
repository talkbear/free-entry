import Layout from '../components/layout'
import Head from 'next/head';
import i18n from 'i18next'
import Link from 'next/link'

function About() {
  return (
    <Layout className="flex flex-col h-screen">
      <Head>
        <title>{i18n.t('link-about')}</title>
      </Head>
      <div className="relative flex flex-1 items-center justify-between">
        {/* shaped background */}
        <div className="absolute t-0 z-10 flex-self w-1/2 h-full bg-slate-400 animate-c-ltr-slidein clip-path-for-about"></div>

        <div className="relative z-20 h-full flex flex-1 flex-col p-20 justify-center animate-c-ltr-slidein">
          <h1 className="mb-5" >{i18n.t('about-title')}</h1>
          <p className="mb-5" >{i18n.t('about-description')}</p>
          <Link href="/help">{i18n.t('about-label-see-more')}</Link>
        </div>

        <div className="flex flex-1 items-center w-96 h-96 p-20 overflow-hidden">
          <img src="/about-slider-index.jpg" alt="关于自由窗 关于公司" />
        </div>

      </div>
    </Layout>
  );
}

export default About;
