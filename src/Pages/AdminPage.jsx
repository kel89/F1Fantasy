import MessageEditor from "../Partials/Admin/MessageEditor";
import Layout from "../Utils/Layout";

export default function AdminPage({}){

    return (
        <>
            <Layout pageName='Admin'>
                <div className='p-6 w-full flex justify-center'>
                    <div className='w-full max-w-5xl'>
                        <MessageEditor />
                    </div>
                </div>
            </Layout>
        </>
    )
}