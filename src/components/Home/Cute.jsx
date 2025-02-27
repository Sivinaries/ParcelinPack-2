import cute from '../../assets/images/cute.png'

function Cute() {
    return (
        <div className='grid grid-cols-1 h-screen bg-white'>
            <div className='my-auto grid md:grid-cols-2'>
                <div className='md:w-3/4 mx-4 md:mx-auto space-y-4 my-auto order-2 md:order-none'>
                    <div>
                        <h1 className='text-xl md:text-2xl'
                            style={{ textAlign: "justify" }}
                        >
                            Temukan kebutuhan packaging untuk berbagai industri di Parcelinpack. Buat kemasan menarik, dan tingkatkan value bisnismu.</h1>
                    </div>
                    <div className='p-2 md:p-3 bg-orange-500 w-1/2 md:w-1/4 rounded-3xl md:order-none order-1'>
                        <a href="">
                            <h1 className='text-white text-center text-lg md:text-xl'>Lihat Produk</h1>
                        </a>
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