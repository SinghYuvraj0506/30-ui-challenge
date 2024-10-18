import { useEffect, useRef, useState } from 'react';
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
import toast from 'react-hot-toast';
import Already from '../../components/dialogs/Already';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HomePage = () => {
    const mainContainer = useRef<HTMLDivElement | null>(null);
    const [successModalOpen, setSuccessModalOpen] = useState(false);
    const [alreadyModalOpen, setAlreadyModalOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

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

    const handleSuccess = async (value?: string) => {
        const reponse = new Promise((resolve, reject) => {
            fetch(`${import.meta.env.VITE_HOST_URL}/api/v1/user/initiateSubscription`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: value
                })
            })
                .then((e) => {
                    return e.json();
                })
                .then((e) => {
                    if (e?.statusCode === 200 && e?.success && e?.data) {
                        // setToastMessage('Subscribed');
                        setSuccessModalOpen(true);
                        resolve(e);
                    } else if (e?.statusCode === 200 && e?.success) {
                        // setToastMessage('Already Subscribed');
                        setAlreadyModalOpen(true);
                        resolve(e);
                    }
                    reject(e?.message || 'Could not initate the subscription, Try Again!!!');
                });
        });

        toast.promise(reponse, {
            loading: 'Please Wait...',
            success: "",
            error: (e) => e?.message || e
        });
    };

    return (
        <>
            {successModalOpen && <Success onClose={() => setSuccessModalOpen(false)} />}
            {alreadyModalOpen && <Already onClose={() => setAlreadyModalOpen(false)} />}
            <div ref={mainContainer}>
                <Main openSuccessModal={handleSuccess} />
                <Why />
                <How />
                <Community />
                <Testimonial />
                <Footer openSuccessModal={handleSuccess} />
            </div>
        </>
    );
};

export default HomePage;
