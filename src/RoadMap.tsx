import React, { 
    useEffect,
     useRef
     } from 'react';

import lottie from 'lottie-web';
import roadmapAnimation from './roadmap.json';
import styled from "styled-components";

interface roadMapType {

    title: string;
    text: string;
    textColor: string;

}

const roadmapInfo: roadMapType[] = [
    {
        title: "Q2 2021",
        text: "MVP Product Launch in the form of a Telegram bot",
        textColor: "#01C3FD",
    },
    {
        title: "Q1 2022",
        text: "Cryptodo.app Website Launch",
        textColor: "#119BFF",
    },
    {
        title: "Q2 2023",
        text: "Securing Blockchain Partnerships, Victories in Major",
        textColor: "#3398D1",
    },
    {
        title: "2022-Q2 2023",
        text: "Launch of CryptoDo AI (AI-Powered Custom Smart Contract Builder)",
        textColor: "#3354A3",
    },
    {
        title: "Q3-Q4 2023",
        text: "Seed Investment Round",
        textColor: "#6890B9",
    },
    {
        title: "Q3 2023",
        text: "Launch of CryptoDo AI DApps Audit Solution",
        textColor: "#2D609A",
    },
    {
        title: "Q4 2023",
        text: "Launch of CryptoDo DApp Store",
        textColor: "#01C3FD",
    },
    {
        title: "Q4 2023",
        text: "Launch of CryptoDo Explorer (Convenient DApps Management Environment)",
        textColor: "#119BFF",
    },
    {
        title: "Q4 2023",
        text: "Public Launch of $CDO Token and Exchange Listing",
        textColor: "#3398D1",
    },
    {
        title: "Q1 2024",
        text: "Launch of CryptoDo Cryptocurrency Payment Gateway",
        textColor: "#3354A3",
    },
    {
        title: "Q2 2024",
        text: "Launch of CryptoDo Developer`s Marketplace",
        textColor: "#6890B9",
    },
    {
        title: "Q2-Q3 2024",
        text: "Launch of CryptoDo Launchpad",
        textColor: "#2D609A",
    },
    {
        title: "Q4 2024",
        text: "Launch of CryptoDo V3 (Visual Web Application Builder with Blockchain Integration)",
        textColor: "#01C3FD",
    },
    {
        title: "2025",
        text: "Launch of CryptoDo Cross-Chain Builder (Seamless Interaction of Multiple Blockchain Networks)",
        textColor: "#119BFF",
    },
];

const SvgContainer = styled.svg`
    transform: rotate(90deg);
`;

const TextContainer = styled.div`
   color: white;
   font-size: 24px;
   white-space: pre-wrap;
   margin-top: 75px;
   margin-right: 300px;
`;

const Title = styled.span`
   font-size: 32px;
   color: ${(props) => props.color};
   z-index: 2;
`;

export const RoadMap: React.FC = () => {

    const roadmapRef = useRef(null);

    const path =
        "M2.16797 1.94629V472.188C2.16797 611.547 115.075 724.445 254.445 724.445C393.816 724.445 506.723 611.547 506.723 472.188V254.455C506.723 115.097 619.63 2.19829 759 2.19829C898.371 2.19829 1011.28 115.097 1011.28 254.455V472.188C1011.28 611.547 1124.19 724.445 1263.56 724.445C1402.93 724.445 1515.83 611.547 1515.83 472.188V1.94629"
    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");

    pathElement.setAttribute("d", path);

    const pathLength = pathElement.getTotalLength();

    useEffect(() => {

        if (roadmapRef.current) {

            const animation = lottie.loadAnimation({

                container: roadmapRef.current,
                animationData: roadmapAnimation,
                renderer: 'svg',
                loop: true,
                autoplay: true,

            });

        }

    }, []);

    return (

        <>

            <SvgContainer
                width="1400"
                height="1500"
                viewBox="-10 0 2126 518"
                fill="none"
                style={{ transform: 'rotate(90deg)' }}
                ref={roadmapRef}
            >

                {roadmapInfo.map((item, index) => {

                    const progress = index / (roadmapInfo.length - 1);
                    const pathPosition = pathLength * progress;
                    const point = pathElement.getPointAtLength(pathPosition);

                    return (

                        <foreignObject
                            x={point.x + 15}
                            y={point.y}
                            width="500"
                            height="300"
                            transform={`rotate(270 ${point.x + 15} ${point.y})`}
                        >

                            <TextContainer>

                                <Title color={item.textColor}>

                                    {item.title}

                                </Title>

                                <br />

                                {item.text}

                            </TextContainer>

                        </foreignObject>

                    );

                })}

            </SvgContainer>

        </>

    );

}
