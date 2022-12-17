import Layout from "../Utils/Layout";

export default function About({}){

    return (
        <>
            <Layout pageName='About'>
                <div className='p-6 gap-8 bg-gray-100 w-full flex justify-center'>
                    <div className="bg-white border rounded-sm p-5 w-full max-w-5xl shadow-lg">
                        This is where the rules live
                    </div>
                </div>
            </Layout>
        </>
    )
}