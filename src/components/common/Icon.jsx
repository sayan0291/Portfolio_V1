export const Icon = ({children,link,t}) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`font-mono text-sm flex items-center gap-1.5 ${t.dim} hover:opacity-70 hover:translate-x-1 transition-all duration-200`}
        >
            {children}
    </a>
)