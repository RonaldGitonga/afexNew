import React from 'react'
import Link from 'next/link'

function Main({subtitle, title }) {
  return (
    <>
        <section className="breadcrumb-area d-flex  p-relative align-items-center"  >
            <div className="container">
                <div className="row align-items-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="breadcrumb-wrap text-left">
                    <div className="breadcrumb-title">
                        <h2> {subtitle} </h2>
                    </div>
                    </div>
                </div>
                <div className="breadcrumb-wrap2">
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                        <Link href="/"> { title } </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            {subtitle}
                        </li>
                    </ol>
                    </nav>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Main