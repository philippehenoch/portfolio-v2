import Image from 'next/image'

export default function Home() {
    return (
        <main className="p-6 max-w-screen-lg m-auto min-h-screen flex justify-center items-center gap-4 flex-wrap md:flex-nowrap">
            <div>
                <p className="font-text text-text text-orange">Hi, my name is</p>
                <h1 className="font-title text-title text-white font-semibold m-0">Philippe Henoch.</h1>
                <h2 className="font-title text-gray-300 font-normal text-xl">I&apos;m a Frontend developer specializing in building digital experiences. Currently, I&apos;m focused on providing support and implementing the best A/B experiments for <a href="https://www.abtasty.com/" target="_blank" rel="noopener" >AB Tasty</a>&apos;s clients.</h2>
                <ul className="flex mt-6">
                    <li>
                        <a className="text-gray-300 no-underline" href="https://www.linkedin.com/in/philippehenoch/" target="_blank" rel="noopener" aria-label="Linkedin">
                            <Image
                                src="/linkedin.svg"
                                alt="Linkedin Logo"
                                className="fill-white"
                                width={24}
                                height={24}
                                priority
                            />
                        </a>
                    </li>
                </ul>
            </div>
            <Image
                src="/philippehenoch.jpg"
                alt="Philippe Henoch"
                className="aspect-square rounded-2xl flex-none"
                width={324}
                height={324}
                priority
                unoptimized={true}
            />
        </main>
    )
}
