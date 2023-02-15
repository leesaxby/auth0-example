import styles from '@/styles/Home.module.css'
import { useUser } from '@auth0/nextjs-auth0/client';
import {Inter} from "@next/font/google";
import {withPageAuthRequired} from "@auth0/nextjs-auth0";

const inter = Inter({ subsets: ['latin'] })

export default function Open({ text }) {
    const { user } = useUser();

    return (
        <>
            <main className={styles.main}>
                <h2 className={inter.className}>
                    OPEN
                </h2>
                <h2 className={inter.className}>
                    {text}
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

export const getServerSideProps = async (context) => {

    try {
        const res = await fetch('http://localhost:3000/api/hello', {
            headers: { Cookie: context.req.headers.cookie },
        });


        console.log(res.status)

        if (res.status === 401) {
            return {
                props: {
                    text: 'UNAUTHORISED',

                }
            }
        }

        const data = await res.json()

        return {
            props: {
                text: data.text,

            }
        }
    } catch (err) {
        return {
            props: {
                text: 'ERROR',

            }
        }
    }



};
