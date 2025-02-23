import { Typography } from "components";
import { useEffect } from "react";
import { useState } from "react";
import { ReactElement } from "react";
import { FC } from "react";

type Props = {
    children: React.ReactNode,
    onClick?: () => void,
    name: string,
}


export const Information: FC = (): ReactElement => {

    const [tailbar, setTailbar] = useState<boolean>(false);
    const [zorilgo, setZorilgo] = useState<boolean>(false);
    const [zuils, setZuils] = useState<boolean>(false);
    const [cont, setCont] = useState<boolean>(false);
    const [read, setRead] = useState<boolean>(true);
    const [data, setData] = useState<any>();

    const DetailedInfo = (props: Props) => {

        const { onClick, children, name } = props;

        const getClass = (props: string) => {
            switch (props) {
                case 'info': return 'p-2 hover:border-l-4 border-primary-main'
            }
        }

        return <div className={`${getClass(name)}`} onClick={onClick}> {children} </div>
    };

    const infos = {
        tailbar: {
            title: 'Тайлбар',
            info: "ЛИЙД Төгсөгчдийн Холбоо (ЛТХ)-ны анхны удирдлагын баг нь 2018-2019 онд 11 гишүүний бүрэлдэхүүнтэй, ТУЗ-ийн даргаар М.Золжаргал (US 2017) сонгогдон ажилласан юм. 2018 оны 7-р сард албан ёсоор төрийн бус байгууллага болон үүсгэн байгуулагдсан цагаас холбооны стратегийн тэргүүлэх чиглэлийг тодорхойлох, байгууллагын бүтэц, соёлыг ул суур...",
        },
        zorilgo: {
            title: 'Зорилго',
            info: 'Хараахан орж ирээгүй',
        },
        zuils: {
            title: 'Хийсэн зүйлс',
            info: 'Хараахан орж ирээгүй',
        },
        cont: {
            title: 'Үргэлжлэл бий',
            info: 'Үргэлжлэлтэй...',
        }
    };

    const getInfos = () => {
        return tailbar ? setData(infos.tailbar) : zorilgo ? setData(infos.zorilgo) : zuils ? setData(infos.zuils) : cont ? setData(infos.cont) : setData({ title: 'Тайлбар', info: 'ЛИЙД Төгсөгчдийн Холбоо (ЛТХ)-ны анхны удирдлагын баг нь 2018-2019 онд 11 гишүүний бүрэлдэхүүнтэй, ТУЗ-ийн даргаар М.Золжаргал (US 2017) сонгогдон ажилласан юм. 2018 оны 7-р сард албан ёсоор төрийн бус байгууллага болон үүсгэн байгуулагдсан цагаас холбооны стратегийн тэргүүлэх чиглэлийг тодорхойлох, байгууллагын бүтэц, соёлыг ул суур...' });
    };

    const toggleRead = () => {
        setRead(!read);
    };

    const option1 = () => {
        setTailbar(true);
        setZorilgo(false);
        setZuils(false);
        setCont(false);
    }

    const option2 = () => {
        setTailbar(false);
        setZorilgo(true);
        setZuils(false);
        setCont(false);
    }

    const option3 = () => {
        setTailbar(false);
        setZorilgo(false);
        setZuils(true);
        setCont(false);
    }

    const option4 = () => {
        setTailbar(false);
        setZorilgo(false);
        setZuils(false);
        setCont(true);
    }

    useEffect(() => {
        getInfos();
    }, [tailbar, zorilgo, zuils, cont]);

    return (
        <>
            <div className='flex max-w-leadScreen mb-[88.75px]'>
                <Typography variant="title1" className="flex absolute justify-center"> {data && data.title} </Typography>
                <div className="flex flex-col border-t-2 border-[#0F233E] border-opacity-10 w-[66%] mt-3.5 pt-2">
                    <Typography variant="body" className="flex flex-col leading-7 mt-5"> {data && data.info && read ? data.info.slice(0, 190) : data && data.info ? data.info : 'ret'}
                        <Typography variant="body" className="flex text-primary-main cursor-pointer" onClick={toggleRead}> {read ? 'Дэлгэрэнгүй' : 'Буцаах'} <img src="/static/arrow.svg" alt="" className="w-6 h-6 mt-1" /> </Typography> </Typography>
                </div>
                <div className="flex flex-col justify-end w-[288px]  ml-[130px] h-fit bg-[#F7F7F7]">
                    <DetailedInfo name="info" onClick={option1}> <Typography variant="body" className="pointer-events-none"> Тайлбар </Typography> </DetailedInfo>
                    <div className="border-b-2"> </div>
                    <DetailedInfo name='info' onClick={option2}> <Typography variant="body" className="pointer-events-none"> Зорилго </Typography> </DetailedInfo>
                    <div className="border-b-2"> </div>
                    <DetailedInfo name="info" onClick={option3}> <Typography variant="body" className="pointer-events-none"> Хийсэн зүйлс </Typography> </DetailedInfo>
                    <div className="border-b-2"> </div>
                    <DetailedInfo name="info" onClick={option4}> <Typography variant="body" className="pointer-events-none"> Үргэлжлэл бий </Typography> </DetailedInfo>
                    <div className="border-b-2"> </div>
                </div>
            </div>
        </>
    )
}

export default Information; 
