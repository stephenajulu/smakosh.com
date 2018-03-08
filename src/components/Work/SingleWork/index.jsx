import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import './work.scss'

const SingleWork = ({id, link, title, image}) => (
    <a
        className={`card card-${id}`}
        target="_blank"
        href={link}
    >   
        <div className="card-header">
            <h3>
                {title}
            </h3>
        </div>
        <div className="card-image">
            <Img sizes={image} alt={title} />
        </div>
        <div className="card-footer">
            <h4>
                Learn more
            </h4>
        </div>
    </a>
)

export default SingleWork