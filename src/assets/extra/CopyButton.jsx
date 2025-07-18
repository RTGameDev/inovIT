
export default function CopyButton({ text }) {
    const [copied, setCopied] = useState(false)

    const onClick = async () => {
        try {
            await navigator.clipboard.writeText(text)
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        } catch {
            // handle silently or fallback if needed
        }
    }

    return (
        <button onClick={onClick}>
            {copied ? '✓ გადაკოპდა!' : 'კოპირება'}
        </button>
    )
}