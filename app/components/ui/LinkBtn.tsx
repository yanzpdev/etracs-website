import Link from 'next/link';

interface LinkProps {
    url: string;
    text: string;
    btnStyle: string;
}

const LinkBtn: React.FC<LinkProps> = ({ url, text, btnStyle }) => {
  return (
    <Link href={url}>
      <div className={btnStyle}>
        <p>{text}</p>
      </div>
    </Link>
  )
}

export default LinkBtn