export default function HexBanner(props) {
    return (
        <section className="w-full h-[20rem] banner border-t border-b border-teal">
            <section className='flex justify-center flex-wrap content-center h-full'>
                <h1 className="text-8xl text-Offwhite font-semibold border-b mb-3 background">{props.title}</h1>
            </section>
        </section>
    )
}