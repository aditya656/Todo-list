import React from 'react'

export const About = () => {
    let AboutStyle = {
        height:"80vh",
        backgroundColor:"#f0f0f0"
    }
    return (
        <div style={AboutStyle}>
            <h3 className="container py-3">This is an about page</h3> 
            <p className="container">This app is Developed using React Js</p>
        </div>
    )
}
