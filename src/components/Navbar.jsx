import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { BsX } from "react-icons/bs";
import { FaBars } from 'react-icons/fa';

export default function Navbar () {
    const [showModal, setShowModal] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [activePage, setActivePage] = useState(null);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const navLinks = useMemo(() => [
        { title: 'Beranda', to: '/' },
        { title: 'Tentang Kami', to: '/about' },
        { title: 'Layanan Kami', to: '/service' },
        { title: 'Kemasan Produk', to: '/product' },
        { title: 'Portofolio', to: '/portfolio' },
    ], []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsVisible(currentScrollPos <= prevScrollPos || currentScrollPos < 100);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    useEffect(() => {
        const currentPath = window.location.pathname;
        const matchedLink = navLinks.find(link => link.to === currentPath);
        setActivePage(matchedLink);
    }, [navLinks]);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const modalVariants = {
        hidden: {
            y: '-100vh',
        },
        visible: {
            y: 0,
            transition: {
                type: 'tween',
                duration: 0.3,
            },
        },
        exit: {
            y: '-100vh',
            transition: {
                type: 'tween',
                duration: 0.3,
                delay: 0.3,
            },
        },
    };

    const linkItemVariants = {
        hidden: { opacity: 0, y: '50%' },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            },
        },
        exit: {
            opacity: 0,
            y: '50%',
            transition: {
                duration: 0.1,
                ease: "easeOut"
            }
        },
    };

    const navLinksVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
        exit: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    const contactButton = useMemo(() => (
        <div className='hidden lg:flex'>
            <div className="p-2 hover:scale-110 rounded-3xl duration-200 delay-150 border-2 bg-orange-500">
                <Link 
                    className="text-black hover:underline delay-100 text-center px-3 lg:px-4 text-sm lg:text-base xl:text-lg font-semibold" 
                    to="/contact"
                >
                    Hubungi Kami
                </Link>
            </div>
        </div>
    ), []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.nav 
                    className="shadow-xl z-50 fixed top-0 right-0 left-0 p-2 bg-white"
                    variants={navLinksVariants}
                >
                    <div className="flex justify-between items-center">
                        <div>
                            <Link className='flex items-center' to="/">
                                <img 
                                    className='w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20' 
                                    src={logo} 
                                    alt="Logo Parcelin" 
                                />
                                {!isMobileView && (
                                    <div className='ml-2 sm:ml-3'>
                                        <p className='text-black text-left text-lg sm:text-base lg:text-xl xl:text-2xl font-bold'>
                                            Parcelin Company
                                        </p>
                                    </div>
                                )}
                            </Link>
                        </div>

                        <div className='flex gap-x-2'>
                            {isMobileView && (
                                <Link to="/contact" className='border border-black p-2 rounded-full'>Hubungi Kami</Link>
                            )}
                            
                            {isMobileView ? (
                                <button className="text-black">
                                    {showModal ? (
                                        <BsX size={42} onClick={toggleModal} />
                                    ) : (
                                        <FaBars 
                                            onClick={toggleModal} 
                                            className="w-8 h-8" 
                                        />
                                    )}
                                </button>
                            ) : (
                                <div className="hidden lg:flex gap-4 xl:gap-8 items-center">
                                    {navLinks.map((link, index) => (
                                        <Link 
                                            key={index} 
                                            to={link.to} 
                                            className={`text-black text-sm lg:text-base xl:text-lg font-semibold hover:scale-110 duration-200 delay-150 ${
                                                activePage?.to === link.to ? 'border-b-2 border-black' : ''
                                            }`}
                                        >
                                            {link.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        
                        {!isMobileView && contactButton}
                    </div>

                    <AnimatePresence>
                        {showModal && isMobileView && (
                            <motion.div
                                className="top-16 fixed inset-0 flex flex-col items-center"
                                variants={modalVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <motion.div
                                    className="relative h-full w-full py-4 px-2 bg-white opacity-80"
                                    variants={navLinksVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <div className="flex flex-col gap-6 sm:gap-8 h-full text-left">
                                        {navLinks.map((link, index) => (
                                            <motion.span 
                                                key={index} 
                                                className="text-black text-2xl"
                                                variants={linkItemVariants}
                                                onClick={closeModal}
                                            >
                                                <Link to={link.to} className='hover:underline hover:underline-offset-8'>
                                                    {link.title}
                                                </Link>
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}