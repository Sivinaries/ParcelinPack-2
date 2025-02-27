import { useState, useEffect, useMemo } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar () {
    const [showModal, setShowModal] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [activePage, setActivePage] = useState(null);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const navLinks = useMemo(() => {
        const baseLinks = [
            { title: 'Beranda', to: '/' },
            { title: 'Tentang Kami', to: '/about' },
            { title: 'Layanan Kami', to: '/service' },
            { title: 'Kemasan Produk', to: '/product' },
            { title: 'Portofolio', to: '/portfolio' },
        ];
        
        return isMobileView 
            ? [...baseLinks, { title: 'Hubungi Kami', to: '/contact' }]
            : baseLinks;
    }, [isMobileView]);

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
            setIsScrollingUp(currentScrollPos < prevScrollPos);
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
            <div className="p-2 hover:scale-110 rounded-3xl duration-200 delay-150 border-2 border-black">
                <Link 
                    className="text-black text-center px-3 lg:px-4 text-sm lg:text-base xl:text-lg font-semibold" 
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
                    className={`shadow-xl z-50 fixed top-0 right-0 left-0 p-2 ${isScrollingUp ? 'bg-white' : 'bg-transparent'}`}
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
                                <div className='ml-2 sm:ml-3'>
                                    <p className='text-black text-left text-lg sm:text-base lg:text-xl xl:text-2xl font-bold'>
                                        Parcelin Company
                                    </p>
                                </div>
                            </Link>
                        </div>
                        
                        {isMobileView ? (
                            <button className="text-black">
                                {showModal ? (
                                    <FaTimes 
                                        onClick={toggleModal} 
                                        className="w-8 h-8" 
                                    />
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
                        
                        {!isMobileView && contactButton}
                    </div>

                    <AnimatePresence>
                        {showModal && isMobileView && (
                            <motion.div
                                className="fixed inset-0 flex justify-center items-center bg-white"
                                variants={modalVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <FaTimes
                                    className="absolute top-4 right-2 text-black cursor-pointer w-8 h-8"
                                    onClick={toggleModal}
                                />
                                <motion.div
                                    className="relative w-full"
                                    variants={navLinksVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <div className="flex flex-col gap-6 sm:gap-8 justify-center mx-6 h-full text-left">
                                        {navLinks.map((link, index) => (
                                            <motion.span 
                                                key={index} 
                                                className="text-black text-3xl font-bold"
                                                variants={linkItemVariants}
                                                onClick={closeModal}
                                            >
                                                <Link to={link.to}>
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
