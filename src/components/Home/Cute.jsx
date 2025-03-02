import { Link } from 'react-router-dom'
import cute from '../../assets/images/cute.png'
import { LuArrowUpRight } from 'react-icons/lu'

function Cute() {
    return (
        <div className='grid grid-cols-1 h-fit md:h-screen bg-white px-4'>
            <div className='md:my-auto my-4 grid md:grid-cols-2'>
                <div className='md:w-5/6 md:mx-auto space-y-4 my-auto order-2 md:order-none'>
                    <div>
                        <h1 className='text-xl md:text-2xl'
                            style={{ textAlign: "justify" }}
                        >
                            Temukan kebutuhan packaging untuk berbagai industri di Parcelinpack. Buat kemasan menarik, dan tingkatkan value bisnismu.</h1>
                    </div>
                    <div className="p-2 md:p-3 bg-orange-500 w-1/2 md:w-1/3 rounded-full md:order-none order-1">
                        <Link to="/service">
                            <h1 className="flex items-center justify-between p-2 text-white text-center text-lg md:text-xl">
                                Lihat Produk <LuArrowUpRight className="" size={24} />
                            </h1>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={cute} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Cute