import React, { useRef } from 'react';
import Navbar from '../../components/Navbar';
import Main from './_components/Main';
import Why from './_components/Why';
import How from './_components/How';
import Community from './_components/Community';
import Testimonial from './_components/Testimonial';
import Footer from '../../components/Footer';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HomePage = () => {
    const mainContainer = useRef<HTMLDivElement | null>(null);

    useGSAP(
        () => {
            const t1 = gsap.timeline();

            t1.from("#nav-container",{
              y:-20,
              duration:1
            })

            t1.from("#mainCont h1",{
              opacity:0,
              y:20,
              duration:0.6,
              stagger:0.3
            })

            t1.from("#mainCont span",{
              opacity:0,
              y:10,
              duration:0.5
            })

            t1.from(".extra-tag",{
              opacity:0,
              y:-20,
              rotate:-40,
              duration:0.7
            })

            t1.from("#mainCont .email-form",{
              opacity:0,
              y:10,
              duration:0.8
            })
        },
        { scope: mainContainer }
    );

    return (
        <div ref={mainContainer}>
            <Navbar />
            <Main />
            <Why />
            <How />
            <Community />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default HomePage;
