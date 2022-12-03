// components/Home.js
import { useNavigate } from "react-router-dom";
import { Heading } from "@aws-amplify/ui-react";
export function Home() {
    const navigate = useNavigate();

    return (
		<div className='h-screen flex justify-center items-center'>
            <div>
                Welcome to Kenny's Fantasy Formula 1!
                <br/>
                <button
                    onClick={() => navigate("/login")}
                    className='btn border border-red-500 px-2 py-1 rounded-lg bg-white text-red-500'>
                    Login
                </button>
            </div>
        </div>
	);
}
