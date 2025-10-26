import React, { useRef, useState, useEffect } from "react";
import "./About.css";

// --- Data Definitions ---

const whatWeDoChecklist = [
    'BROWSE JOB BOARD',
    'CREATE COMPANY PROFILE',
    'VIEW RESOURCES',
    'SUBMIT RESUME',
];

const whatWeDoCards = [
    { number: '01', text: 'Connect People with the Right Jobs for Them', color: 'blue' },
    { number: '02', text: 'Get Your Job Postings & Company Info Out to the World', color: 'yellow' },
    { number: '03', text: 'Career Advice & Candidate Resources', color: 'purple' },
    { number: '04', text: 'Free Feedback Makeover', color: 'green' },
];

const testimonials = [
    { id: 1, name: 'Madhu Kp', text: 'Good app for finding new jobs', avatar: 'avatar-madhu.png' },
    { id: 2, name: 'Vinodha Kumari', text: 'It was great and I got the job.', avatar: 'avatar-vinodha.png' },
    { id: 3, name: 'Manju Yadav', text: 'I have never seen this kind of application so very good', avatar: 'avatar-manju.png' },
    { id: 4, name: 'Ganesh S.', text: 'Very helpful and user-friendly interface.', avatar: 'avatar-ganesh.png' },
    { id: 5, name: 'Priya R.', text: 'Found my dream job in a week!', avatar: 'avatar-priya.png' },
];

// --- Main Component ---

const AboutUs = () => {
    // --- Embedded Carousel Logic ---
    const trackRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerView = 3; // Number of cards visible at one time

    const updateCarousel = () => {
        if (trackRef.current) {
            const firstCard = trackRef.current.querySelector('.testimonial-card');
            if (!firstCard) return;

            // Card width + margin (30px total margin between cards)
            const distance = firstCard.offsetWidth + 30; 
            const transformValue = -currentIndex * distance;
            trackRef.current.style.transform = `translateX(${transformValue}px)`;
        }
    };

    useEffect(() => {
        updateCarousel();
    }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

    const handlePrev = () => {
        setCurrentIndex(prev => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        const maxIndex = Math.max(0, testimonials.length - cardsPerView);
        setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
    };
    // -----------------------------------------------------------------

    return (
        <div className="about-us-page">

            {/* Hero Section - UPDATED with "OUR STORY" */}
            <section className="hero-section">
                <div className="overlay">
                    <h1>OUR STORY</h1> 
                    <p>It has been always a more challenging approach where our target is to reach every single blue collar employee & related employer out there, nationwide.

At "ShramSaathi" we realise and recognise that each requirement may be different & one-size-fits-all application may fall short of what we have set out to achieve.

This is where our "ShramSaathi" team SAKSHI & SARTHAK  pitches in to empower our web-app addressing every requirement to happy placements.</p>
                </div>
            </section>
            
            <hr className="section-divider" />

            {/* ================================== */}
            {/* 2. WHAT WE DO SECTION (Cards & Checklist) */}
        
            <section className="what-we-do-section">
                <div className="container works-container">
                    
                    <div className="works-left">
                        
                        <h2 className="section-title works-title">What We Do</h2>

                        <div className="works-checklist">
                            <ul>
                                {whatWeDoChecklist.map((item, index) => (
                                    <li key={index}><span className="check-icon">&#10003;</span> {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="works-right">
                        <div className="works-cards-grid">
                            {whatWeDoCards.map((card, index) => (
                                <div className={`works-card card-${card.color}`} key={index}>
                                    <div className="logo-box">
                                        {/* NOTE: Please ensure 'blujobs-logo.png' is available */}
                                        <img src="https://blujobs.in/wp-content/uploads/2022/07/man.png" /> 
                                    </div>
                                    <p className="card-text">{card.text}</p>
                                    <span className="card-number">{card.number}</span>
                                    
                                    {/* Overflow Content for Card 4 only */}
                                    {card.number === '04' && (
                                        <div className="overflow-content">
                                            <h3 className="overflow-title">OUR STORY</h3> 
                                            <p>It has been always a more challenging approach where our target is to reach every single blue collar employee & related employer out there, nationwide. At blujobs we realise and recognise that each requirement may be different & one-size-fits-all application may fall short...</p>
                                            <p className="snipping-tool"><span className="cut-icon">&#9986;</span> Snipping Tool</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            <hr className="section-divider" />

            {/* ================================== */}
            {/* 3. CLIENTS TESTIMONIALS SECTION */}
            {/* ================================== */}
            <section className="testimonials-section">
                <div className="container testimonials-container">
                    <p className="testimonials-subtitle"></p>
                    <h2 className="section-title testimonials-title">What Our Customers Say About Us</h2>

                    <div className="testimonials-carousel-track" ref={trackRef}>
                        {testimonials.map((testimonial) => (
                            <div className="testimonial-card" key={testimonial.id}>
                                <div className="user-avatar-container">
                                    {/* NOTE: Replace with actual avatar images */}
                                    <img src={testimonial.avatar} alt={`${testimonial.name} Avatar`} className="user-avatar" />
                                </div>
                                <p className="testimonial-text">{testimonial.text}</p>
                                <p className="user-name">{testimonial.name}</p>
                                <span className="quote-mark-large">❝</span>
                            </div>
                        ))}
                    </div>

                    <div className="carousel-navigation">
                        <button 
                            className="nav-arrow prev-btn" 
                            onClick={handlePrev} 
                            disabled={currentIndex === 0}
                            aria-label="Previous Testimonial"
                        >
                            &#10094; {/* Left Chevron */}
                        </button>
                        <button 
                            className="nav-arrow next-btn" 
                            onClick={handleNext} 
                            disabled={currentIndex >= testimonials.length - cardsPerView}
                            aria-label="Next Testimonial"
                        >
                            &#10095; {/* Right Chevron */}
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <h2>Join ShramSaathi</h2>
                <p>Whether you’re a worker or employer, start your journey with ShramSaathi today!</p>
                <button className="cta-button">Get Started</button>
            </section>

        </div>
    );
};

export default AboutUs;




