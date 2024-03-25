import React, { useState, useEffect } from "react";
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import ContestCard from "@/components/ContestCard/ContestCard";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner";
import Footer from "@/components/Footer/Footer";

const PreviousContest2 = () => {
    const [allFormsData, setAllFormsData] = useState([]);
    const [displayFormLink, setDisplayFormLink] = useState({ link: "", date: "" });
    const [displayCards, setDisplayCards] = useState(true);
    const [displayForm, setDisplayForm] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const fetchContestDetails = async () => {
            try {
                const contestRef = collection(db, 'Contest2');
                const q = query(contestRef);
                const querySnapshot = await getDocs(q);


                const today = new Date().toISOString().split('T')[0];

                const formsData = [];
                querySnapshot.forEach((doc) => {
                    const contestDetails = doc.data().contestDetails;
                    const contestDate = contestDetails.date;
                    if (contestDate < today) {
                        formsData.push(contestDetails); // Push only if contest date is less than today's date
                    }
                });
                setAllFormsData(formsData);
            } catch (error) {
                console.error('Error fetching contest details:', error);
            }
        };

        fetchContestDetails();
    }, []);

    const handleCardClick = (link, date) => {
        setDisplayFormLink({ link, date });
        setDisplayCards(false);
        setDisplayForm(true);
    };

    const handleBack = () => {
        setDisplayForm(false);
        setDisplayCards(true);
    }


    const handleBackonCards = () => {
        setIsLoading(true);
        router.push("/Contest2");
        setIsLoading(false);
    }

    return (
        <>
            {isLoading && (
                <TailSpin
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                />
            )}

            {!isLoading && displayCards && (
                 <div className="flex flex-col justify-center items-center">
                
                 <div className="flex justify-between items-center mt-5 w-[90vw]">
 
                 <img src="https://res.cloudinary.com/dchbfnlct/image/upload/v1711188558/fit_size_fit_xmjifp.png" className="h-[60px] w-[60px]" />
 
                 <button className="bg-[#2dad5c] w-[155px] h-[55px] p-1    text-md text-white rounded-md" onClick={handleBackonCards}>← Go Back to Today's Contest</button>
 
                 <div className="text-black flex flex-col -mt-5 items-center  font-bold text-xl">
           <h1 className='text-[8px] text-black font-normal'>Sponsored By</h1>
           <img src="https://res.cloudinary.com/dchbfnlct/image/upload/v1711042228/sdmslogo_pfcwpm.jpg"  className='h-[55px] w-[63px]'/>
           </div>
 
                 </div>
                <div className="mt-24 flex flex-wrap justify-center items-center">
                    {allFormsData.map((formData, index) => (
                        <ContestCard
                            key={index}
                            date={formData.date}
                            formLink={formData.formLink}
                            handleClick={handleCardClick}
                        />
                    ))}

            
                </div>
                
                </div>
            )}

            {displayForm && (
                <>
                <div className="flex flex-col items-center text-center my-8 w-[100vw] mx-auto p-6 bg-gray-100 shadow-md rounded-md">
                    <button className="bg-blue-800 w-[145px] h-[45px] mr-auto ml-8 text-white rounded-md" onClick={handleBack}>← Go Back</button>
                    <h1 className="text-2xl font-bold mb-4">{displayFormLink.date}</h1>
                    <form>
                        <hr className="tect-blue-500 my-8 border-1 border-[#222222] border-t w-[100%]" />
                        {displayFormLink.link && (
                            <iframe src={displayFormLink.link} width="900" className="w-[95vw] min-h-[900px] max-h-[2500px]" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                        )}
                    </form>
                      </div>
               
                            </>
        )
            }
             <Footer />
        </>
       
    );
};

export default PreviousContest2;