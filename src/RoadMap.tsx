import React, {
    useEffect,
    useState,
    useRef
} from 'react';

import lottie from 'lottie-web';
import roadmapAnimation from './roadmap.json';
import styled from "styled-components";

import { roadmapInfo } from './roadmapInfo.';

const SvgContainer = styled.svg`
  
      width: 1618px;
      height: 1226px;
  
      @media screen and (max-width: 768px) {

        width: 720px;
        height: 730px;
        transform: rotate(90deg);

      }
  `;

const TextContainer = styled.div`

   color: white;
   font-size: 24px;
   white-space: pre-wrap;
  
   @media screen and (max-width: 768px) {

    margin-top: 75px;
    margin-right: 300px;

  }
   
  `;

const Title = styled.span`

   font-size: 32px;
   color: ${(props) => props.color};
   z-index: 2;

  `;

export const RoadMap: React.FC = () => {

    const [isTabletView, setIsTabletView] = useState(window.innerWidth <= 768);

    const roadmapRef = useRef(null);

    const path = isTabletView ?
        "M2.16797 1.94629V472.188C2.16797 611.547 115.075 724.445 254.445 724.445C393.816 724.445 506.723 611.547 506.723 472.188V254.455C506.723 115.097 619.63 2.19829 759 2.19829C898.371 2.19829 1011.28 115.097 1011.28 254.455V472.188C1011.28 611.547 1124.19 724.445 1263.56 724.445C1402.93 724.445 1515.83 611.547 1515.83 472.188V1.94629" :
        "M2.16748 1.94629V472.188C2.16748 611.547 115.075 724.445 254.445 724.445C393.815 724.445 506.722 611.547 506.722 472.188V254.455C506.722 115.097 619.63 2.19829 759 2.19829C898.37 2.19829 1011.28 115.097 1011.28 254.455V472.188C1011.28 611.547 1124.18 724.445 1263.55 724.445C1402.92 724.445 1515.83 611.547 1515.83 472.188V1.94629"

    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");

    pathElement.setAttribute("d", path);

    const pathLength = pathElement.getTotalLength();

    useEffect(() => {

        const handleResize = () => setIsTabletView(window.innerWidth <= 768);

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, []);


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
                viewBox={isTabletView ? '-10 -20 1830 518' : '-130 0 1818 800'}
                fill="none"
                ref={roadmapRef}
            >

                {roadmapInfo.map((item, index) => {

                    const progress = index / (roadmapInfo.length - 1);
                    const pathPosition = pathLength * progress;
                    const point = pathElement.getPointAtLength(pathPosition);

                    const txtPosX =
                        (item.title === "Q2 2021" || item.title === "2025") ? '-70px' :
                            (item.text === "Launch of CryptoDo DApp Store") ? '0px' :
                                (item.title === "2022-Q2 2023" || item.title === "Q2 2024") ? '40px' :
                                    (item.title === "Q1 2024") ? '-70px' :
                                        (item.title === "Q2-Q3 2024") ? '-180px' :
                                            (item.title === "Q4 2024") ? '-230px'
                                                : '90px';

                    const txtPosY =
                        (item.title === "2022-Q2 2023" || item.title === "Q2 2024") ? '-60px' :
                            (item.title === "2025") ? '180px' :
                                (item.title === "Q2 2021") ? '140px' :
                                    (item.text === "Launch of CryptoDo DApp Store"
                                        || item.text === "Launch of CryptoDo Explorer (Convenient DApps Management Environment)") ? '120px' :
                                        (item.title === "Q1 2024") ? '-110px' :
                                            (item.text === "Public Launch of $CDO Token and Exchange Listing") ? '-60px' :
                                                (item.title === "Q4 2024") ? '130px'
                                                    : '50px';

                    const txtCenter =
                        (item.text === "MVP Product Launch in the form of a Telegram bot")
                            ? '40px'
                            : (item.text === "Launch of CryptoDo Cross-Chain Builder (Seamless Interaction of Multiple Blockchain Networks)")
                                ? '70px'
                                : '0px'

                    return (
                        
                        <foreignObject
                            x={isTabletView ? point.x + 15 : point.x + parseInt(txtPosX)}
                            y={isTabletView ? point.y : point.y - parseInt(txtPosY)}
                            width={isTabletView ? "500" : "230"}
                            height={isTabletView ? "300" : "200"}
                            transform={isTabletView ? `rotate(270 ${point.x + 15} ${point.y})` : ''}
                            key={index}
                        >
                            <TextContainer>

                                <Title style={isTabletView ? {} : { marginLeft: txtCenter }} color={item.textColor}>

                                    {item.title}

                                </Title>

                                <br />


                                {item.text}

                            </TextContainer>

                        </foreignObject>

                    );

                })}

            </SvgContainer >

        </>

    );

}
