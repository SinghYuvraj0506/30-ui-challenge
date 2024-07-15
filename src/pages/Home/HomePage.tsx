import { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import Main from './_components/Main';
import Why from './_components/Why';
import How from './_components/How';
import Community from './_components/Community';
import Testimonial from './_components/Testimonial';
import Footer from '../../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Success from '../../components/dialogs/Success';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HomePage = () => {
    const mainContainer = useRef<HTMLDivElement | null>(null);
    const [successModalOpen, setSuccessModalOpen] = useState(false);

    useGSAP(() => {
        const t1 = gsap.timeline();

        t1.from('#nav-container', {
            y: -20,
            duration: 0.4
        });

        t1.from('#mainCont h1', {
            opacity: 0,
            y: 20,
            duration: 0.2,
            stagger: 0.1
        });

        t1.from('#mainCont span', {
            opacity: 0,
            y: 10,
            duration: 0.3
        });

        t1.from('.extra-tag', {
            opacity: 0,
            y: -20,
            rotate: -40,
            duration: 0.3
        });

        t1.from('#mainCont .email-form', {
            opacity: 0,
            y: 10,
            duration: 0.5
        });

        t1.from('#slider-container img', {
            opacity: 0,
            y: 10,
            duration: 0.6
        });
    });

    useEffect(() => {
        gsap.to('#slider-container img', {
            transform: 'translateX(-1000px)',
            ease: 'circ',
            scrollTrigger: {
                trigger: mainContainer.current,
                scroller: 'body',
                // markers: true,
                start: 'top 0%',
                end: 'top -150%',
                scrub: 2
            }
        });
    }, []);


    return (
        <>
            {successModalOpen && <Success onClose={() => setSuccessModalOpen(false)} />}
            <div ref={mainContainer}>
                <Navbar />
                <Main openSuccessModal={() => setSuccessModalOpen(true)} />
                <Why />
                <How />
                <Community />
                <Testimonial />
                <Footer openSuccessModal={() => setSuccessModalOpen(true)} />
            </div>
        </>
    );
};

export default HomePage;
