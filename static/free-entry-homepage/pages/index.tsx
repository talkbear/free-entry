import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/layout'
import i18next from 'i18next'
import classNames from 'classnames'

export default function Home() {
  const getSlides = () => {
    const slideNames = [{ name: 'index', visible: 0 }, { name: 'second', visible: 0 }, { name: 'third', visible: 0 }, { name: 'fourth', visible: 0 }, { name: 'fifth', visible: 0 }]

    return slideNames.map(({ name }, index) => {
      return {
        h2: i18next.t(`home-${name}-h2`),
        h3: i18next.t(`home-${name}-h3`),
        desc: i18next.t(`home-${name}-desc`),
        img: `/home-slider-${name}.jpg`
      }
    })
  }

  return (
    <Layout>
      <section className="">
        {
          getSlides().map((slide, index, data) => {
            // or visible? () : null
            return (
              <div className={classNames('h-screen mx-24 flex items-center justify-between border-gray-50 overflow-hidden', { 
                'hidden': slide.visible , 'flex-row-reverse': index % 2 == 0 , 'border-b border-dashed': index !== data.length - 1
                } ) } key={index} >
                <div className="flex-1 mx-5 w-100 h-100">
                  <img src={slide.img} alt={slide.h2} />
                </div>
                <div className="flex-1 mx-5">
                  <h2 className="text-6xl font-bold pb-4">{slide.h2}</h2>
                  <h3 className="text-4xl font-bold pb-4 pl-1">{slide.h3}</h3>
                  <p className="text-lg pl-1">{slide.desc}</p>
                </div>
              </div>
            )
          })
        }
      </section>
    </Layout>
  )
}
