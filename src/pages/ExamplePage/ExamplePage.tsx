import { useCallback, useMemo, useState } from 'react'
import viteLogo from '/vite.svg'
import svgExample from '@/assets/example.svg'
import styles from './ExamplePage.module.css'
import clsx from 'clsx'
import { ExampleService } from '@/services/ExampleService'
import { IPost } from '@/types/example'

const ExamplePage = () => {
    const [count, setCount] = useState(0)
    const [post, setPost] = useState<IPost>();

    const exampleService = useMemo(
        () => new ExampleService(),
        []
    )

    const fetchPosts = useCallback(
        () => {
            setPost(undefined);

            exampleService
                .getPost()
                .then(setPost)
        },
        []
    )
    

    return (
        <div className={styles.wrapper}>
            <div>
                <a href="https://vitejs.dev"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={viteLogo}
                        className={styles['logo']}
                        alt="Vite logo"
                    />
                </a>

                <a
                    href="https://react.dev"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={svgExample}
                        className={clsx(styles['logo'], styles['react'])}
                        alt="React logo"
                    />
                </a>
            </div>

            <h1>Vite + React</h1>

            <div className={styles['card']}>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>

                <button onClick={fetchPosts}>
                    Click to send request
                </button>
            </div>

            <pre className={styles['read-the-docs']}>
                {JSON.stringify(post, null, 4)}
            </pre>
        </div>
    )
}

export default ExamplePage