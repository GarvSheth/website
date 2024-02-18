import React from 'react'

export default function PubCard() {

    const img_src = "https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-1.2.1"

    return (
        <div className="publs-card">
            <div className="publs-card-header">
                <div className="publs-card-img" style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 75%, rgba(0, 0, 0, 0)), linear-gradient(90deg, rgba(0, 0, 0, 0.3) 75%, rgba(0, 0, 0, 0)), url(${img_src})`}} />
            </div>
            <div className="publs-card-body">
                <p>Abstract</p>
            </div>
            <div className="publs-card-footer">
                <p>Keywords</p>
            </div>
        </div>
    )
}
