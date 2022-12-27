import Link from "next/link";
import React from "react";

import { Layout } from "../components/Layouts/Layout";

const CustomErrorPage: React.FC = ({}) => {
    return (
        <Layout>
            <div className="flex flex-col h-48 p-48">
                <div className="m-auto">
                    <h1 className="text-2xl">Looks like you got lost</h1>
                    <Link href="/">
                        <a
                            className="py-4 text-blue"
                            title="Take me back to the homepage."
                        >
                            Let's go home
                        </a>
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default CustomErrorPage;
