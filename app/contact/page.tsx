export default function Contact() {
    return(
        <section className="max-w-2xl px-6">
            <section className="max-w-2xl px-6 py-24">
                <p className="font-body text-xs font-medium tracking-widest uppercase text-zinc-400 mb-6">
                    Contact
                </p>
                <h1 className="font-display font-black leading-none tracking-tight text-zinc-950 mb-6" style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}>
                    Let's talk.
                </h1>
                <p className="font-display italic text-zinc-400 text-xl mb-20">
                    Got something in mind? I'd love to hear it.
                </p>
            </section>
        
            <div className="flex flex-col divide-y divide-zinc-200 border-t border-b border-zinc-200">
                <a href="https://www.linkedin.com/in/syed-t-ab7b91414" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-6 group">
                <span className="font-body text-xs font-medium tracking-widest uppercase text-zinc-400">
                    LinkedIn
                </span>
                <span className="font-display text-zinc-950 text-lg group-hover:text-zinc-500 transition-colors">
                    syed-t-ab7b91414 →
                </span>
                </a>

                <a href="https://github.com/walter2-sys" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-6 group">
                    <span className="font-body text-xs font-medium tracking-widest uppercase text-zinc-400">
                        GitHub
                    </span>
                    <span className="font-display text-zinc-950 text-lg group-hover:text-zinc-500 transition-colors">
                        walter2-sys →
                    </span>
                </a>

                <a href="tel:6476173962" className="flex items-center justify-between py-6 group">
                    <span className="font-body text-xs font-medium tracking-widest uppercase text-zinc-400">
                        Phone
                    </span>
                    <span className="font-display text-zinc-950 text-lg group-hover:text-zinc-500 transition-colors">
                        647-617-3962 →
                    </span>
                </a>

                <a href="mailto:walter.k.sec@gmail.com" className="flex items-center justify-between py-6 group">
                    <span className="font-body text-xs font-medium tracking-widest uppercase text-zinc-400">
                        Email
                    </span>
                    <span className="font-display text-zinc-950 text-lg group-hover:text-zinc-500 transition-colors">
                        walter.k.sec@gmail.com →
                    </span>
                </a>

            </div>

        </section>
    )
}