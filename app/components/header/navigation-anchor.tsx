import Link from 'next/link'

interface NavigationAnchorProps {
    link: string
    text: string
}

export default function NavigationAnchor(props: NavigationAnchorProps) {
    return (
        <Link href={`/${props.link}`}>
            <li className="py-5 hover:cursor-pointer hover:border-b-2 hover:border-buttered-rum-500">{props.text}</li>
        </Link>
    )
}
