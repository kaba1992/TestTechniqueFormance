import React from 'react';
import CardImage from '../components/cards/CardImage';
import Accordion from '../components/accordion/Accordion';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const LandingPage = () => {

    useEffect(() => {
      
    }, []);
    return (

        <div id="wrapper" className="w-full flex min-h-[594px] flex-col bg-dark justify-center bg-[#101114] items-center mt-[65px]">
            <div className="w-[80%]">
                <div id="top-block" className="flex flex-row gap-8 bg-[#101114]  justify-center items-center min-h[244px] p-8 rounded-xl mb-8">

                    <div className="flex flex-col justify-between  ">
                        <span className="text-xs bg-[#23252B] text-[#8F9BA8] px-2 py-1 rounded w-fit mb-2"><img src="/icons/arrowRight.png" className="w-4 h-4 rounded bg-[#23252B] p-2 flex items-center justify-center text-white" alt="fctl" /> Formance CLI</span>
                        <h1 className="text-9 font-bold text-white mb-2">Programmatic payments at your fingertips</h1>
                        <p className="text-[#8F9BA8] text-sm mb-4">
                            Use your terminal for payments operations, quick debugging and workflows scripts automations.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 bg-[#23252B] p-4 rounded-lg text-white font-mono text-sm min-w-[320px]">
                        <span><span className="text-[#158FFF]">fctl</span> add <span className="text-[#5D6779]">connectors/paypal</span></span>
                        <span><span className="text-[#158FFF]">fctl</span> payments list</span>
                        <span><span className="text-[#158FFF]">fctl</span> payments search <span className="text-[#5D6779]">tx_15221 --json</span></span>
                        <span className="mt-2"><span className="text-[#158FFF]">fctl</span> alerts list</span>
                        <span><span className="text-[#158FFF]">fctl</span> alerts <span className="text-[#5D6779]">--assert-ok</span></span>
                    </div>
                </div>
                <div id="bottom-block" className="flex flex-row gap-12 mt-16 justify-center items-center">

                    <div className="grid grid-cols-2 gap-6 bg-[#101114] p-6 rounded-xl w-full">

                        <div className="flex flex-row gap-2 w-[60%] flex-wrap">
                            <img src="/icons/S.png" className="w-16 h-16 rounded bg-[#23252B] p-2 flex items-center justify-center text-white" alt="s" />
                            <img src="/icons/greenA.png" className="w-16 h-16 rounded bg-[#23252B] p-2 flex items-center justify-center text-white" alt="greenA" />
                            <img src="/icons/infinite.png" className="w-16 h-16 rounded bg-[#23252B] p-2 flex items-center justify-center text-white" alt="infinite" />
                            <img src="/icons/arrowTop.png" className="w-16 h-16 rounded bg-[#23252B] p-2 flex items-center justify-center text-white" alt="arrowTop" />
                            <img src="/icons/redCircle.png" className="w-16 h-16 rounded bg-[#23252B] p-2 flex items-center justify-center text-white" alt="arrowTop" />
                            <img src="/icons/blueDot.png" className="w-16 h-16 rounded bg-[#23252B] p-2 flex items-center justify-center text-white" alt="redCircle"  />
                            <img src="/icons/dashed.png" className="w-16 h-16 rounded bg-[#23252B] p-2 flex items-center justify-center text-white" alt="dashed" />

                        </div>
                        <div className="flex flex-col justify-center max-w-lg">
                            <span className="text-xs bg-[#23252B] text-[#8F9BA8] px-2 py-1 rounded w-fit mb-2">Connectors Store</span>
                            <h2 className="text-2xl font-bold text-white mb-2">Growing and open rails connectivity</h2>
                            <p className="text-[#8F9BA8] text-sm">
                                Keep you existing partners rails and add more to address new use cases. Our connector SDK is open source, making our library every expanding
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LandingPage;
