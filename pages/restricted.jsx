import styles from '@/styles/Home.module.css'
import { useUser } from '@auth0/nextjs-auth0/client';
import {Inter} from "@next/font/google";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const inter = Inter({ subsets: ['latin'] })

export default function Open() {
    const { user } = useUser();

    return (
        <>
            <main className={styles.main}>
                <h2 className={inter.className}>
                    RESTRICTED
                </h2>

                {
                    user && (
                            <h2 className={inter.className}>
                                {user.name}
                            </h2>
                    )
                }

            </main>
        </>
    )
}
