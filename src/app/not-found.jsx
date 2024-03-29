import Link from 'next/link'
import Home from './page'

const NotFound = () => {
  return (
    <div>
        <h2>Not Found</h2>
        <p>Page you are looking for does not exist!</p>
        <Link href={<Home />}>Return Home</Link>
    </div>
  )
}

export default NotFound