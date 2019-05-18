//workshop tracks for the landing page
import React, { Component } from 'react'
import { ReactComponent as Shell } from '../../assets/frontpage/shell.svg'
import './styles.css'

//Data for different tracks are all Objects
const frontEnd = {
    title: 'Front-End',
    path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/1024px-Circle_-_black_simple.svg.png',
    details: 'Brief description on Front-End',
    trackDetails: ['HTML/CSS', 'Javascript', 'UI/UX Design']
};
const backEnd = {
    title: 'Back-End',
    path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/1024px-Circle_-_black_simple.svg.png',
    details: 'Brief description on Back-End',
    trackDetails: ['MongoDB', 'Google Cloud', 'Azure']
};
const Hardware = {
    title: 'Hardware',
    path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/1024px-Circle_-_black_simple.svg.png',
    details: 'Brief description on Hardware',
    trackDetails: ['Arduino', 'Raspberry Pi', '3D Modeling']
};
const CyberSecurity = {
    title: 'CyberSecurity',
    path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/1024px-Circle_-_black_simple.svg.png',
    details: 'Brief description on CyberSecurity',
    trackDetails: ['Thing1', 'Thing2', 'Thing3']
};

class Tracks extends Component {

    //Fucntion that takes Data and renders card structure
    trackCard = (trackParams) => {
        let { title, path, details, trackDetails } = trackParams;
        return (
            <div className='track-card-container'>
                <p>{title}</p>
                <img className="holder-circle" alt="cirlcePlaceholder"
                    src={path} />
                <p style={{ textAlign: "center" }}>{details}</p>
                <div>
                    {trackDetails.map(techDetails => (
                        <div className='shell-and-info'>
                            <Shell className='shell' />
                            <p>{techDetails}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='tracks-container'>
                <p className="landing-section-content-text"> is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley.</p>
                <div className='trackDesc'>
                    {this.trackCard(frontEnd)}
                    {this.trackCard(backEnd)}
                    {this.trackCard(Hardware)}
                    {this.trackCard(CyberSecurity)}
                </div>
            </div>
        )
    }
}

export default Tracks;