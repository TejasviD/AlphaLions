import { useState } from "react";

export default function Faq() {

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i);
    };

    return (
        <div className="faq-section" id="faq">
            <div className="faq-container">
                <div className="faq-title">
                    <h2 className="faq">
                        FAQ
                    </h2>
                </div>
                <div className="wrapper">
                    <div className="faq-wrap">
                        {data.map((item, i) => (
                            <div className="faq-block" key={item.id}>
                                <div className="faq-top" onClick={() => toggle(i)}>
                                    <h2 className="faq-title-wrapper">
                                        {item.question}
                                    </h2>
                                    <span>{selected === i ? '-' : '+'}</span>
                                </div>
                                <div className={selected === i ? 'faq-content show' : 'faq-content'}>
                                    {item.answer}
                                </div>
                                <div className="faq-bottom"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>

    );
}

const data = [
    {
        id: "0",
        question: 'WHAT IS AN NFT?',
        answer: 'An NFT is a Non-Fungible Token which is a digital asset that represents real-world objects like art, music, in-game items and videos of which the ownership is managed by the blockchain which users may possess, buy and trade.'
    },
    {
        id: "1",
        question: 'WHAT IS ALPHA LIONS?',
        answer: 'Metamask is a crypto wallet that can store your Ethereum. You need it to be able to buy an Alpha Lions NFT.'
    },
    {
        id: "2",
        question: 'HOW MANY LIONS WILL BE AVAILABLE?',
        answer: 'Metamask is a crypto wallet that can store your Ethereum. You need it to be able to buy an Alpha Lions NFT.'
    },
    {
        id: "3",
        question: 'WHICH BLOCKCHAIN WILL THE LIONS BE MINTED ON?',
        answer: 'Metamask is a crypto wallet that can store your Ethereum. You need it to be able to buy an Alpha Lions NFT.'
    },
    {
        id: "4",
        question: 'IS THERE A WHITELIST?',
        answer: 'Yes check the requirements on the Discord.' + 'Yes check the requirements on the Discord.'
    },
    {
        id: "5",
        question: 'WILL THERE BE A PRE-SALE?',
        answer: 'Yes check the requirements on the Discord.' + 'Yes check the requirements on the Discord.'
    },
    {
        id: "6",
        question: 'WHEN WILL THE PUBLIC SALE GO LIVE?',
        answer: 'Yes check the requirements on the Discord.' + 'Yes check the requirements on the Discord.'
    },
    {
        id: "7",
        question: 'HOW TO MINT AN ALPHA LIONS NFT?',
        answer: 'Yes check the requirements on the Discord.' + 'Yes check the requirements on the Discord.'
    },
    {
        id: "8",
        question: 'WHERE CAN I SEE MY NFT AFTER MINTED?',
        answer: 'Yes check the requirements on the Discord.' + 'Yes check the requirements on the Discord.'
    }

]