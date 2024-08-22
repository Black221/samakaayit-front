import Button from '../../components/Button'

function BesoinAide() {
    return (
        <section className="mt-20 lg:mt-[550px] mb-20">
            <div className="flex flex-col justify-center items-center space-y-8">
                <h2 className="font-bold text-3xl lg:text-5xl text-center">Besoin d'aide</h2>
                <p className="max-w-md lg:max-w-2xl text-center text-gray-500">Si vous avez besoin d'une aide quelconque, répondez à notre FAQ et faites nous en part.</p>
                <Button label="Consulter à la FAQ" className="text-black bg-yellow-400 rounded-full w-full lg:w-80 h-16" />
            </div>
        </section>
    )
}

export default BesoinAide
