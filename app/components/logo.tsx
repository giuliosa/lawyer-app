import { twMerge } from 'tailwind-merge'

interface LogoProps {
    className?: string
}

const Logo = ({ className }: LogoProps) => {
    return (
        <svg
            version="1.0"
            width="578.658"
            height="222.98"
            viewBox="0 0 578.98 222.98"
            className={twMerge('h-20 w-20', className)}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M137.43 118.22c-.46-.04-.93-.03-1.4-.03-4.65 0-9.31.01-13.96-.01-.65 0-1.33.18-2.05-.3-.94-4.93-1.9-9.93-2.85-14.94-.04-.19 0-.39 0-.59 6.57-5.96 4.13-15.41-4.33-17.65-.28-.56-.16-1.17-.16-1.75-.01-3.52-.01-7.05-.01-10.57 0-.47.02-.93-.02-1.4-.08-.89-.45-1.53-1.46-1.55-1-.02-1.43.57-1.52 1.48-.05.46-.02.93-.02 1.39 0 3.59.01 7.18-.01 10.77 0 .58.17 1.2-.3 1.78-4.08 1.05-6.96 3.47-7.78 7.77-.81 4.26.91 7.64 4.26 10.16-1.03 5.24-2.02 10.29-3.03 15.41H86.81c-1.91 0-2.55.38-2.53 1.45.02 1.07.67 1.45 2.58 1.46 4.32.01 8.64-.01 12.97.02.7 0 1.45-.22 2.1.25.24.55.08 1.09-.01 1.59-2.57 13.21-5.17 26.41-7.72 39.63-.77 3.97-1.7 7.91-2.21 11.92-.68.96-.51 2.07-.67 3.13.55-1 .87-2.06.99-3.17l13.65-52.09c.12-.46.25-.9.65-1.16h10.53c4.42 17.91 8.82 35.78 13.23 53.65.12 1.22.48 2.38 1.02 3.49-.27-1.26-.14-2.59-.72-3.78-3.33-17.75-6.67-35.5-9.99-53.2.93-.36 1.6-.24 2.25-.24 4.32-.01 8.64 0 12.97-.01.53 0 1.07 0 1.59-.08.84-.13 1.3-.65 1.23-1.52-.08-.78-.51-1.24-1.29-1.31zm-30.33-.15c1.22-4.63 2.42-9.18 3.59-13.65.85-.23 1.49-.29 2.3-.06 1.1 4.48 2.22 9.02 3.37 13.71zm3.91-16.77c-3.74-.08-6.71-3.17-6.69-6.97.02-3.7 3.21-6.78 6.94-6.7 3.75.08 6.72 3.17 6.68 6.96-.03 3.71-3.21 6.79-6.93 6.71z" />
            <path d="M190.39 117.83c-.69-.52-1.45-.39-2.16-.4-1.29-.01-1.96-.49-2.48-1.77-.57-1.4-.51-2.86-.98-4.24-1.53-4.44-2.5-9.04-3.81-13.55-.94-3.23-1.78-6.49-2.56-9.77-.6-2.51-1.55-4.91-2.09-7.44-.5-2.31-1.11-4.62-1.79-6.88-.74-2.45-1.41-4.89-2.14-7.76 4.61.55 8.35 2.9 12.49 4.1 1.66-1.67 1.35-4.36-.69-5.39-.77-.39-1.54-.77-2.35-1.06-4.49-1.63-9.05-2.93-13.79-3.72-5.9-.98-11.8-.87-17.68-.19-5.55.64-10.86 2.46-16.16 4.11-3.9 1.21-7.72 2.74-11.69 3.75-2.21.56-4.49.94-6.83.96-.23-.92-.19-1.59.18-2.28.94-1.73 1.81-3.5 2.76-5.23.6-1.09.56-2.11.01-3.2-.59-1.16-1.14-2.34-1.69-3.51l-5.22-9.68c-.02-.01-.04-.02-.06-.02-.06.1-.12.21-.18.31-.06-.1-.12-.21-.18-.31-.02.01-.04.02-.06.02l-5.22 9.68c-.55 1.18-1.11 2.36-1.69 3.52-.55 1.1-.6 2.11.01 3.2.95 1.73 1.82 3.5 2.76 5.23.38.69.41 1.36.18 2.28-2.35-.01-4.63-.4-6.83-.96-3.97-1.01-7.79-2.54-11.69-3.75-5.3-1.65-10.61-3.47-16.16-4.11-5.88-.68-11.77-.79-17.68.19-4.73.79-9.3 2.08-13.79 3.72-.81.29-1.58.67-2.35 1.06-2.04 1.03-2.35 3.73-.69 5.39 4.14-1.2 7.89-3.54 12.49-4.1-.72 2.87-1.4 5.31-2.14 7.76-.68 2.26-1.29 4.57-1.79 6.88-.55 2.53-1.5 4.93-2.09 7.44-.78 3.28-1.62 6.55-2.56 9.77-1.31 4.51-2.29 9.11-3.81 13.55-.47 1.38-.41 2.85-.98 4.24-.53 1.28-1.2 1.76-2.48 1.77-.71 0-1.47-.12-2.16.4-.27 1.06.66 1.65 1.09 2.38 1.53 2.57 3.26 4.97 5.86 6.63 1.22.77 2.47 1.2 3.89 1.34 3.05.29 6.11.08 9.17.14 3.7.07 7.41-.12 11.12-.13 4.26-.01 7.12-2.42 9.7-5.43 1.22-1.42 1.8-3.23 3.14-4.67-.77-.72-1.65-.6-2.47-.58-1.84.05-2.59-.37-2.95-2.13-.63-3.12-1.47-6.19-2.32-9.25-1.37-4.93-2.67-9.87-4-14.81-1.58-5.89-3.18-11.79-4.74-17.68-.61-2.3-1.58-4.5-1.82-6.9-.2-2 .12-2.43 2.16-2.68 4.81-.59 9.56 0 14.27.89 5.14.96 10.14 2.45 15.08 4.17 4.09 1.42 8.25 2.66 12.45 3.69 7.75 1.91 14.15 1.1 18.54 0 4.21-1.05 8.36-2.27 12.45-3.69 4.94-1.72 9.94-3.21 15.08-4.17 4.71-.88 9.45-1.48 14.27-.89 2.05.25 2.37.68 2.16 2.68-.25 2.4-1.21 4.6-1.82 6.9-1.57 5.9-3.16 11.79-4.74 17.68-1.33 4.94-2.62 9.89-4 14.81-.85 3.07-1.69 6.13-2.32 9.25-.36 1.76-1.1 2.18-2.95 2.13-.82-.02-1.7-.15-2.47.58 1.34 1.44 1.92 3.25 3.14 4.67 2.58 3.01 5.44 5.42 9.7 5.43 3.71.01 7.41.21 11.12.13 3.06-.06 6.11.15 9.17-.14 1.42-.13 2.67-.56 3.89-1.34 2.61-1.66 4.33-4.06 5.86-6.63.46-.74 1.38-1.33 1.11-2.39zM66.8 116.55c-.51 1-1.42.93-2.27.93-6.84.03-13.68.05-20.52.05-1.74 0-2.16-.51-1.75-2.2.37-1.54.88-3.05 1.33-4.57 1.37-4.56 2.49-9.19 3.73-13.78 1.84-6.84 3.32-13.78 5.39-20.56.41-1.36.57-2.98 2.13-4.29 4.05 15.07 8.01 29.76 11.96 44.42zm112.19.99c-6.84 0-13.68-.02-20.52-.05-.85 0-1.76.07-2.27-.93 3.95-14.67 7.91-29.35 11.97-44.42 1.56 1.31 1.72 2.93 2.13 4.29 2.06 6.78 3.54 13.72 5.39 20.56 1.24 4.59 2.36 9.22 3.73 13.78.46 1.52.96 3.03 1.33 4.57.41 1.69-.01 2.2-1.76 2.2z" />
            <path d="M202.66 47.4V20.32h-27.08C157.44 7.53 135.33 0 111.49 0 87.65 0 65.54 7.52 47.4 20.32H20.32V47.4C7.53 65.54 0 87.65 0 111.49c0 23.84 7.52 45.95 20.32 64.09v27.08H47.4c18.14 12.79 40.25 20.32 64.09 20.32 23.84 0 45.95-7.52 64.09-20.32h27.08v-27.08c12.79-18.14 20.32-40.25 20.32-64.09 0-23.84-7.52-45.95-20.32-64.09zM20.33 171.95C8.79 154.62 2.06 133.82 2.06 111.49c0-22.34 6.73-43.13 18.27-60.46zM111.5 2.06c22.34 0 43.13 6.73 60.46 18.27H51.03C68.37 8.79 89.16 2.06 111.5 2.06zM22.38 22.37H44.6a112.449 112.449 0 0 0-22.22 22.22zm0 178.24v-22.22c6.33 8.41 13.81 15.89 22.22 22.22zm89.12 20.31c-22.34 0-43.13-6.73-60.46-18.27h120.93c-17.34 11.54-38.13 18.27-60.47 18.27zm89.12-20.31H178.4c8.41-6.33 15.89-13.81 22.22-22.22zm0-25.68c-7.08 9.91-15.76 18.6-25.67 25.67H48.05c-9.91-7.08-18.6-15.76-25.68-25.68V48.05c7.08-9.91 15.76-18.6 25.68-25.68h126.89c9.91 7.08 18.6 15.76 25.67 25.67v126.89zm0-130.34a112.449 112.449 0 0 0-22.22-22.22h22.22zm2.04 6.43c11.54 17.34 18.27 38.13 18.27 60.47 0 22.34-6.73 43.13-18.27 60.47zM322.238 109.323c-4.41-.03-8 .73-11.13 2.35-7.65 3.96-11.19 11.38-10.09 21.17.86 7.66 6.67 14.07 14.5 15.98 16.79 4.11 29.77-6.86 27.48-23.22-1.37-9.74-9.61-16.2-20.76-16.28zm16.59 21.68c-.51 10.33-7.25 17-17 16.92-9.66-.07-16.27-6.92-16.67-17.28-.02-.43 0-.85 0-1.28.01-2.56.2-5.1 1.09-7.54 2.79-7.66 9.35-11.49 18.28-10.62 7.2.7 12.99 6.35 14.05 13.85.28 1.95.35 3.97.25 5.95zm27.08.28c1.03-.4 1.71-.6 2.34-.91 4.64-2.25 7.11-7.25 6.16-12.39-.85-4.58-4.36-7.55-9.79-7.8-4.72-.22-9.45-.05-15.19-.05 3.37 1.57 3.72 3.66 3.7 6.1-.08 8.8-.08 17.61 0 26.42.02 2.6-.39 4.8-4.08 6.01h10.73c-2.74-1.14-3.21-3.27-3.18-5.89.09-7.81.03-15.62.03-23.43v-7.06c8.95-1.28 12.66.4 13.51 6.02.48 3.16.35 6.26-2.24 8.68-2.39 2.24-5.49 2.22-9.25 2.31 2.9 1.72 4.41 3.55 5.79 5.54 2.1 3.03 4.18 6.08 6.42 9.01 2.99 3.91 6.98 5.5 12.41 4.72-9.1-2.94-11.37-11.77-17.36-17.28zm154.37 17.4c-3.66-1.21-5.11-3.44-6.08-6.19-.9-2.53-2.07-4.97-3.11-7.45-3.53-8.42-7.06-16.85-10.7-25.54-.53.66-.88.94-1.03 1.31-4.38 10.45-8.76 20.9-13.08 31.38-1.14 2.76-2.37 5.35-5.45 6.48h9.64c-1.76-1.15-2.78-2.22-1.92-4.2 1.28-2.96 2.1-6.13 3.78-8.98h15c.03 4.5 5.4 8.04 1.83 13.19zm-27.36-15.27c2.23-5.73 4.35-11.17 6.77-17.36 2.29 6.08 4.32 11.44 6.55 17.36zm-209.56-24.18c-5.1.18-10.13 1.07-15.89 2.54 4.16.15 4.32 2.51 4.32 5.02-.01 8.66-.03 17.32.01 25.98.01 2.64-.41 4.94-3.36 5.91h10.09c-2.84-1.08-3.18-3.29-3.12-5.87.1-4.68.03-9.37.03-14.05v-16.42c10.78-3.5 16.87.41 16.27 10.14-.21 3.44-1.34 6.45-4.81 7.86-3.4 1.39-6.31.4-8.83-2.86.26 2.94 1.86 4.07 3.76 4.82 4.72 1.87 10.04-.01 12.47-4.48 2.41-4.42 2.54-9.01.02-13.4-2.4-4.17-6.5-5.35-10.96-5.19zm145.37 37.77v-16.39c4.22.72 8.58-1.76 12.18 2.13.26-2.17.37-4.27-.04-6.14-3.5 4.05-7.9 1.72-12.22 2.18-.11-5.92-.34-11.23.17-16.9 3.81 0 7.33-.02 10.86.01 1.58.02 2.67.83 3.22 2.32-.23.53-.19 1.01.3 1.39.47-.39.51-.87.29-1.4v-4.86c-7.21 1.07-14.17.49-21.9.8 2.75 1.31 3.37 2.92 3.34 5.17-.12 9.24-.11 18.48-.01 27.72.03 2.53-.5 4.52-4.09 5.6h22.99c.72-2.66 2.13-4.98 2.41-8.5-3.79 8.85-10.89 6.73-17.5 6.87zm-44.53-37.53v5.32c3.35-5.86 9.06-1.95 14.15-3.46 0 11.51-.03 22.14.02 32.77.01 2.35-1.38 3.48-3.66 4.53 3.76.29 7.06.34 10.57 0-3.25-2.16-3.35-2.26-3.36-5.93-.03-6.96-.01-13.91-.01-20.87v-10.56c5.06 1.71 10.59-2.46 14.25 3.73.07-1.98.36-3.78-.18-5.53-10.68.74-21.13.6-31.78 0zm92.08 33.79c-4.24 5.7-10.17 3.31-15.82 3.82 0-10.63.04-20.71-.03-30.78-.02-2.53.2-4.81 3.35-6.19h-10.32c2.49 1.34 3.25 3.08 3.23 5.42-.08 9.23-.05 18.47-.02 27.7.01 2.42-.33 4.56-3.15 5.38h22.06l1.52-4.53c.75-.57.91-1.27.47-2.13-.82.08-1.02.73-1.29 1.31zm1.67-2.85c.02.21.11.42.18.63.1-.07.21-.13.31-.2-.07-.21-.14-.43-.21-.64-.1.07-.29.15-.28.21zM402.658 65.224c-.14 6.81-.03 13.63-.07 20.45-.01 1.03.36 2.21-1.01 3.39-9.69-10.3-19.33-20.54-29.4-31.24 0 11.91-.01 22.95.01 33.99 0 2.49.04 4.94-3.48 5.4 3.11.5 5.94.49 8.78.25.53.22 1.01.19 1.42-.29-.38-.49-.85-.54-1.38-.3-2.67-.78-2.7-2.95-2.7-5.14 0-6.96-.02-13.92.02-20.88.01-1.07-.36-2.25.96-3.64 9.67 10.29 19.3 20.55 28.93 30.8.86-.75.57-1.49.56-2.15-.04-10.37-.04-20.73-.17-31.1-.03-2.41.29-4.47 3.25-5.88h-9.21c2.98 1.33 3.55 3.56 3.49 6.34zm-60.36-7.13c-12.76-.15-21.45 7.72-21.59 19.55-.14 12.32 8.22 20.64 20.9 20.76 12.72.13 21.64-8.11 21.73-20.07.09-11.85-8.48-20.1-21.04-20.24zm15.69 26.78c-2.33 7.94-9.47 12.58-17.93 11.77-8.1-.78-14.15-6.99-14.95-15.41-.09-.98-.01-1.98-.01-2.97-.15-2.28.11-4.51.78-6.71 2.27-7.47 8.17-11.77 16.22-11.73 7.78.04 13.7 4.34 15.87 11.64 1.32 4.45 1.33 8.96.02 13.41zm198.85-26.78c-.67.04-1.95.08-3.23.2-9.37.9-16.5 7.93-17.62 17.37-1.17 9.83 4.01 18.31 13.11 21.43 3.55 1.22 7.21 1.6 10.93 1.2 8.81-.94 15.5-6.2 17.67-13.81 4.07-14.25-5.17-26.29-20.86-26.39zm.55 38.6c-10.23.07-17.2-7.43-17.19-18.52.01-10.92 6.78-18.29 16.86-18.35 10.18-.06 17.05 7.14 17.18 18.01.13 11.16-6.68 18.79-16.85 18.86zm-42.98-37.58c-6.79-.66-13.6-.15-21.07-.32 2.25 1.51 3.33 3 3.28 5.43-.17 9.22-.11 18.45-.04 27.68.02 2.51-.72 4.37-2.97 5.7 5.96 0 11.92.01 17.88 0 11.56-.01 21.89-8.59 18.93-24.27-1.49-7.9-7.97-13.44-16.01-14.22zm11.95 23.6c-1.46 8.02-7.27 13.01-15.37 13.14-3.51.06-7.02.01-10.71.01v-35.29c5.47.09 10.88-.7 16.27.87.27.08.54.18.8.29 7.08 3.03 10.73 11.52 9.01 20.98zm-54.65-2.67c.95-.31 1.51-.44 2.02-.67 4.91-2.24 7.54-7.27 6.58-12.56-.85-4.71-4.46-7.65-10.17-7.88-4.59-.19-9.2-.04-13.79-.04 2.46 1.51 2.68 3.69 2.67 6.09-.05 8.95-.09 17.9.02 26.84.03 2.58-.71 4.46-3.23 5.59 2.59.2 5 .21 7.41.19.83-.01 1.65-.1 2.63-.16-3.24-2.16-3.3-2.19-3.31-5.83-.03-6.68-.01-13.35-.01-20.03v-10.48c8.77-1.38 12.63.35 13.51 5.94.4 2.53.46 5.12-1.09 7.41-2.32 3.42-6 3.6-10.67 3.66 3.38 1.64 4.82 3.74 6.28 5.82 1.96 2.78 3.86 5.61 5.89 8.34 3.04 4.09 7.09 5.89 12.71 5.09-8.96-2.87-11.24-11.65-17.45-17.32zm-25.68 11.84c-4.2-10.2-8.46-20.38-12.78-30.53-.4-.94-.31-2.34-1.81-2.75-4.66 11.05-9.35 22.07-13.95 33.13-1.04 2.51-2.33 4.66-5 5.77h8.75c-3.41-5.36 1.87-8.84 2.29-13.21h15.58c-.44 4.59 5.47 8.01 1.47 13.21h10.17c-2.51-1.1-3.72-3.19-4.72-5.62zm-21.57-9.69c2.34-5.96 4.45-11.31 6.83-17.36 2.3 6.16 4.35 11.63 6.5 17.36zm-111.9 22.38c-3.45 1.13-6.99 1.18-10.53.73-8.36-1.05-16.17-4.09-24.07-6.8-2.38-.82-2.47-2.75-2.46-4.84.04-9.51.07-19.03-.02-28.54-.03-2.54.17-4.8 3.15-6.16h-10.05c2.48 1.39 3.3 3.04 3.3 5.17-.03 9.37-.02 18.74-.01 28.12 0 2.49-.8 4.39-4.4 4.99 5.44 1.17 9.62 2.91 13.71 4.89 3.31 1.6 6.61 3.27 10.04 4.6 8.24 3.18 16.24 2.92 23.76-2.11-.81-.33-1.63-.31-2.42-.05z" />
            <path d="M297.968 95.814v-16.54c4.3.8 8.7-1.5 12.32 2.23v-6.5c-3.07 3.06-3.75 3.18-12.36 2.39v-16.36c8.68-1.25 11.63-.82 14.39 2.04.12-1.6.64-3.23-.31-4.92-6.83 1.08-13.65.46-20.82.95 2.23 1 2.86 2.73 2.86 4.84-.03 9.38-.02 18.76 0 28.14.01 2.46-.78 4.38-3.22 5.39h21.95c.9-2.57 1.8-5.11 2.69-7.65-3.87 7.92-10.94 5.8-17.5 5.99zm17.08 8.68c0-.05-.01-.1-.01-.15-.21.12-.17.16.01.15zm.01.06c-.03.02-.06.03-.09.05l.1.03.08-.14c-.06.01-.05-.01-.09 0-.01.02-.01.04 0 .06zM284.178 184.276v.52c-.69-.05-1.62-.08-2.78-.08-1.49 0-2.6.03-3.33.08v-.52c.66-.03 1.13-.12 1.42-.25.29-.13.43-.37.43-.71 0-.3-.1-.7-.31-1.22l-1.58-4.26h-6.29l-1.07 2.75c-.35.94-.52 1.65-.52 2.13 0 .54.19.93.56 1.17.37.24.94.37 1.7.39v.52c-.99-.05-1.99-.08-2.99-.08-.78 0-1.43.03-1.95.08v-.52c.87-.21 1.55-.96 2.05-2.26l6.11-15.75h.42l6.34 16.35c.41 1.07 1.01 1.63 1.79 1.66zm-6.37-6.96-2.91-7.77-2.96 7.77zm29.73-8.62c1.52 1.53 2.29 3.77 2.29 6.69 0 1.89-.37 3.54-1.12 4.96-.75 1.42-1.82 2.52-3.23 3.29s-3.1 1.16-5.06 1.16l-1.51-.03c-.97-.04-1.68-.05-2.13-.05-1.42 0-2.5.03-3.22.08v-.52c.62-.03 1.08-.1 1.37-.21.29-.1.48-.3.58-.6.1-.29.15-.77.15-1.43v-12.89c0-.66-.05-1.13-.15-1.43-.1-.3-.3-.49-.58-.6-.29-.1-.74-.17-1.37-.21v-.52c.61.05 1.45.08 2.52.08l2.21-.03c1.18-.04 1.97-.05 2.37-.05 3.06.01 5.36.78 6.88 2.31zm-8.74-1.65c-.27.12-.46.34-.56.65-.1.31-.16.78-.16 1.4v12.99c0 .62.05 1.09.16 1.4.1.31.29.53.56.65.27.12.68.18 1.23.18 1.84 0 3.28-.33 4.34-1 1.06-.67 1.8-1.64 2.22-2.92.42-1.28.64-2.92.64-4.91 0-1.99-.23-3.62-.7-4.87-.47-1.26-1.23-2.19-2.27-2.82-1.05-.62-2.46-.94-4.25-.94-.54.01-.94.07-1.21.19zm37.56-.65v.52c-.87.21-1.55.96-2.05 2.26l-6.11 15.75h-.42l-6.34-16.35c-.41-1.07-1.01-1.63-1.79-1.66v-.52c.69.05 1.62.08 2.78.08 1.49 0 2.6-.03 3.33-.08v.52c-.66.04-1.13.12-1.42.25-.29.13-.43.37-.43.72 0 .29.11.7.31 1.22l4.7 12.5 4.24-10.99c.35-.94.52-1.65.52-2.13 0-.54-.19-.93-.56-1.17-.37-.24-.94-.37-1.7-.39v-.52c.99.05 1.98.08 2.99.08.79-.01 1.44-.04 1.95-.09zm22.32.75c1.24.75 2.2 1.82 2.88 3.23.68 1.41 1.03 3.1 1.03 5.05 0 1.91-.35 3.6-1.05 5.07-.7 1.47-1.68 2.61-2.94 3.43-1.26.81-2.68 1.22-4.28 1.22-1.64 0-3.09-.37-4.33-1.12-1.24-.75-2.2-1.82-2.88-3.24-.68-1.41-1.03-3.1-1.03-5.05 0-1.91.35-3.59 1.05-5.07.7-1.47 1.68-2.62 2.94-3.43 1.26-.82 2.68-1.22 4.28-1.22 1.64.02 3.09.39 4.33 1.13zm-7.36.51c-.84.77-1.49 1.85-1.95 3.23-.46 1.39-.69 2.97-.69 4.76 0 1.8.26 3.39.77 4.75.51 1.37 1.2 2.43 2.07 3.17.87.75 1.84 1.12 2.91 1.12 1.11 0 2.08-.39 2.92-1.16.84-.77 1.49-1.85 1.95-3.24.46-1.38.69-2.97.69-4.75 0-1.8-.26-3.39-.77-4.76-.51-1.37-1.2-2.43-2.07-3.17-.87-.75-1.84-1.12-2.91-1.12-1.1.01-2.08.4-2.92 1.17zm33.9-1.2c.66.29 1.38.71 2.16 1.26.22.17.4.26.52.26.33 0 .55-.53.65-1.59h.6c-.07 1.13-.11 3.12-.11 5.98h-.6c-.16-.92-.32-1.68-.49-2.27-.17-.6-.44-1.12-.81-1.57-.5-.62-1.16-1.12-1.96-1.48-.81-.36-1.65-.55-2.53-.55-1.14 0-2.15.37-3.02 1.12-.87.75-1.53 1.81-2 3.18-.47 1.38-.7 2.98-.7 4.82 0 3.12.5 5.4 1.49 6.85 1 1.45 2.56 2.17 4.69 2.17 1.04 0 1.94-.27 2.7-.81.31-.21.51-.41.61-.61.1-.2.14-.47.14-.82v-2.5c0-.73-.07-1.26-.21-1.59-.14-.33-.38-.55-.73-.67s-.91-.2-1.69-.23v-.52c.9.05 2.12.08 3.67.08 1.18 0 2.08-.03 2.7-.08v.52c-.4.04-.69.1-.87.21-.18.1-.3.3-.36.6s-.09.77-.09 1.43v5.15h-.52c-.02-.35-.09-.68-.21-1-.12-.32-.29-.48-.49-.48-.1 0-.21.03-.31.08s-.29.17-.55.36c-.61.47-1.23.82-1.89 1.05-.65.23-1.37.35-2.17.35-1.79 0-3.31-.37-4.59-1.11-1.27-.74-2.25-1.8-2.92-3.18-.68-1.39-1.01-3.04-1.01-4.96 0-1.98.36-3.71 1.08-5.21.72-1.5 1.71-2.65 2.97-3.46 1.27-.81 2.7-1.21 4.31-1.21 1.05.01 1.88.15 2.54.43zm31.48 17.82v.52c-.69-.05-1.62-.08-2.78-.08-1.49 0-2.6.03-3.33.08v-.52c.66-.03 1.13-.12 1.42-.25.29-.13.43-.37.43-.71 0-.3-.1-.7-.31-1.22l-1.58-4.26h-6.29l-1.07 2.75c-.35.94-.52 1.65-.52 2.13 0 .54.19.93.56 1.17.37.24.94.37 1.7.39v.52c-.99-.05-1.99-.08-2.99-.08-.78 0-1.43.03-1.95.08v-.52c.87-.21 1.55-.96 2.05-2.26l6.11-15.75h.42l6.34 16.35c.41 1.07 1.01 1.63 1.79 1.66zm-6.37-6.96-2.91-7.77-2.96 7.77zm29.73-8.62c1.52 1.53 2.29 3.77 2.29 6.69 0 1.89-.37 3.54-1.12 4.96-.75 1.42-1.82 2.52-3.23 3.29s-3.1 1.16-5.06 1.16l-1.51-.03c-.97-.04-1.68-.05-2.13-.05-1.42 0-2.5.03-3.22.08v-.52c.62-.03 1.08-.1 1.37-.21.29-.1.48-.3.58-.6.1-.29.15-.77.15-1.43v-12.89c0-.66-.05-1.13-.15-1.43-.1-.3-.3-.49-.58-.6-.29-.1-.74-.17-1.37-.21v-.52c.61.05 1.45.08 2.52.08l2.21-.03c1.18-.04 1.97-.05 2.37-.05 3.06.01 5.35.78 6.88 2.31zm-8.74-1.65c-.27.12-.46.34-.56.65-.1.31-.16.78-.16 1.4v12.99c0 .62.05 1.09.16 1.4.1.31.29.53.56.65.27.12.68.18 1.23.18 1.84 0 3.28-.33 4.34-1 1.06-.67 1.8-1.64 2.22-2.92.42-1.28.64-2.92.64-4.91 0-1.99-.23-3.62-.7-4.87-.47-1.26-1.23-2.19-2.27-2.82-1.05-.62-2.46-.94-4.25-.94-.54.01-.95.07-1.21.19zm35.39.1c1.24.75 2.2 1.82 2.88 3.23.68 1.41 1.03 3.1 1.03 5.05 0 1.91-.35 3.6-1.05 5.07-.7 1.47-1.68 2.61-2.94 3.43-1.26.81-2.68 1.22-4.28 1.22-1.64 0-3.09-.37-4.33-1.12-1.24-.75-2.2-1.82-2.88-3.24-.68-1.41-1.03-3.1-1.03-5.05 0-1.91.35-3.59 1.05-5.07.7-1.47 1.68-2.62 2.94-3.43 1.26-.82 2.68-1.22 4.28-1.22 1.65.02 3.09.39 4.33 1.13zm-7.35.51c-.84.77-1.49 1.85-1.95 3.23-.46 1.39-.69 2.97-.69 4.76 0 1.8.26 3.39.77 4.75.51 1.37 1.2 2.43 2.07 3.17.87.75 1.84 1.12 2.91 1.12 1.11 0 2.08-.39 2.92-1.16.84-.77 1.49-1.85 1.95-3.24.46-1.38.69-2.97.69-4.75 0-1.8-.26-3.39-.77-4.76-.51-1.37-1.2-2.43-2.07-3.17-.87-.74-1.84-1.12-2.91-1.12-1.11.01-2.08.4-2.92 1.17zm30.07-1.3c.44.17.9.4 1.37.72.38.24.67.36.88.36.15 0 .28-.09.36-.27.09-.18.15-.47.21-.87h.6c-.09 1.01-.13 2.77-.13 5.3h-.6c-.1-1.4-.51-2.59-1.21-3.55s-1.72-1.44-3.06-1.44c-.93 0-1.7.28-2.29.84-.59.56-.88 1.29-.88 2.17 0 .66.15 1.23.46 1.72.31.49.69.9 1.16 1.25s1.13.79 2 1.32l.75.47c1.09.67 1.95 1.27 2.59 1.78.63.51 1.14 1.1 1.52 1.75.38.66.57 1.43.57 2.31 0 1.58-.52 2.79-1.56 3.65-1.04.86-2.36 1.29-3.95 1.29-.83 0-1.51-.09-2.04-.26s-1.03-.41-1.52-.7c-.38-.24-.68-.36-.88-.36-.16 0-.28.09-.36.27-.08.18-.16.47-.21.87h-.6c.07-.95.1-3.03.1-6.24h.6c.12 1.75.55 3.17 1.3 4.26.75 1.09 1.89 1.64 3.43 1.64.94 0 1.73-.29 2.39-.87.66-.58.99-1.44.99-2.59 0-.97-.32-1.79-.98-2.47-.65-.68-1.68-1.44-3.08-2.29a29.23 29.23 0 0 1-2.48-1.66 6.166 6.166 0 0 1-1.55-1.75c-.4-.68-.6-1.49-.6-2.4 0-1.46.47-2.57 1.4-3.34.93-.77 2.1-1.16 3.48-1.16.77 0 1.37.09 1.82.25z" />
        </svg>
    )
}

export default Logo
