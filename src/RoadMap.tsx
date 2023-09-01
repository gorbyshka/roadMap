import styled from "styled-components";

interface roadMapType {
    title: string;
    text: string;
    circleColor: string;
    textColor: string;
}

const roadmapInfo: roadMapType[] = [
    {
        title: "Q2 2021",
        text: "MVP Product Launch in the form of a Telegram bot",
        circleColor: "#01C3FD",
        textColor: "#01C3FD",
    },
    {
        title: "Q1 2022",
        text: "Cryptodo.app Website Launch",
        circleColor: "#119BFF",
        textColor: "#119BFF",
    },
    {
        title: "Q2 2023",
        text: "Securing Blockchain Partnerships, Victories in Major",
        circleColor: "#3398D1",
        textColor: "#3398D1",
    },
    {
        title: "2022-Q2 2023",
        text: "Launch of CryptoDo AI (AI-Powered Custom Smart Contract Builder)",
        circleColor: "#3354A3",
        textColor: "#3354A3",
    },
    {
        title: "Q3-Q4 2023",
        text: "Seed Investment Round",
        circleColor: "#6890B9",
        textColor: "#6890B9",
    },
    {
        title: "Q3 2023",
        text: "Launch of CryptoDo AI DApps Audit Solution",
        circleColor: "#2D609A",
        textColor: "#2D609A",
    },
    {
        title: "Q4 2023",
        text: "Launch of CryptoDo DApp Store",
        circleColor: "#01C3FD",
        textColor: "#01C3FD",
    },
    {
        title: "Q4 2023",
        text: "Launch of CryptoDo Explorer (Convenient DApps Management Environment)",
        circleColor: "#119BFF",
        textColor: "#119BFF",
    },
    {
        title: "Q4 2023",
        text: "Public Launch of $CDO Token and Exchange Listing",
        circleColor: "#3398D1",
        textColor: "#3398D1",
    },
    {
        title: "Q1 2024",
        text: "Launch of CryptoDo Cryptocurrency Payment Gateway",
        circleColor: "#3354A3",
        textColor: "#3354A3",
    },
    {
        title: "Q2 2024",
        text: "Launch of CryptoDo Developer`s Marketplace",
        circleColor: "#6890B9",
        textColor: "#6890B9",
    },
    {
        title: "Q2-Q3 2024",
        text: "Launch of CryptoDo Launchpad",
        circleColor: "#2D609A",
        textColor: "#2D609A",
    },
    {
        title: "Q4 2024",
        text: "Launch of CryptoDo V3 (Visual Web Application Builder with Blockchain Integration)",
        circleColor: "#01C3FD",
        textColor: "#01C3FD",
    },
    {
        title: "2025",
        text: "Launch of CryptoDo Cross-Chain Builder (Seamless Interaction of Multiple Blockchain Networks)",
        circleColor: "#119BFF",
        textColor: "#119BFF",
    },
];

const Circle = styled.circle<{ fillColor: string }>`
    fill: ${(props) => props.fillColor};
    stroke-width: 2;
`;

const SvgContainer = styled.svg`
    transform: rotate(90deg);
`;

const TextContainer = styled.div`
   color: white;
   font-size: 24px;
   white-space: pre-wrap;
   margin-top: 10px;
`;

const Title = styled.span`
   font-size: 32px;
   color: ${(props) => props.color};
`;

const G = styled.g``;

const Path = styled.path``;

export const RoadMap: React.FC = () => {

    const path = "M2.16748 1.94629V472.188C2.16748 611.547 115.075 724.445 254.445 724.445C393.815 724.445 506.722 611.547 506.722 472.188V254.455C506.722 115.097 619.63 2.19829 759 2.19829C898.37 2.19829 1011.28 115.097 1011.28 254.455V472.188C1011.28 611.547 1124.18 724.445 1263.55 724.445C1402.92 724.445 1515.83 611.547 1515.83 472.188V1.94629";

    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");

    pathElement.setAttribute("d", path);

    const pathLength = pathElement.getTotalLength();

    return (

        <SvgContainer
            xmlns="http://www.w3.org/2000/svg"
            width="1500"
            height="1600"
            viewBox="-10 0 1926 518"
            fill="none"
            style={{ transform: 'rotate(90deg)' }}
        >

            <Path
                d={path}
                stroke="#7B8793"
                strokeOpacity="0.26"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="6 6"
            />

            {roadmapInfo.map((item, index) => {
                const progress = index / (roadmapInfo.length - 1);
                const pathPosition = pathLength * progress;
                const point = pathElement.getPointAtLength(pathPosition);

                return (

                    <G key={index}>

                        <Circle
                            cx={point.x}
                            cy={point.y}
                            r="10"
                            fillColor={item.circleColor}
                        />

                        <foreignObject
                            x={point.x + 15}
                            y={point.y}
                            width="200"
                            height="100"
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

                    </G>

                );

            })}

        </SvgContainer>
        
    );

}
