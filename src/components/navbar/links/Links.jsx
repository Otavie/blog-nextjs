import SingleLink from './singleLink/singleLink'
import styles from './links.module.css'

const Links = () => {
    const links = [
        {
            title: "Home",
            path: '/'
        },
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Contact",
            path: '/contact'
        },
        {
            title: "Blog",
            path: '/blog'
        }
    ];

    const session = true
    const isAdmin = true

    return (
    <div className={styles.links}>{links.map((link) =>(
        <SingleLink item={link} key={link.title} />
    ))}</div>
  )
}

export default Links