import React from 'react';

const Blogs = () => {
    return (
        <article className='md:grid grid-cols-2 px-4 py-4 mt-5 gap-5'>
            <section>
                <h1 className='text-2xl text-center'>What is Context API?</h1>
                <p className='text-justify mt-4'>Context API হল "props drilling" এর একটি Alternative সিস্টেম। সাধারনত একটি Component থেকে অন্য Component-এ বা তার বিরতের Child Component-এ ডাটা পাস করার জন্য props use করা হয়। কিন্তু যদি কোনো ডাটা GrandParent Component থেকে তার Child এর আবার তার Child এর তার Child এ যদি ডাটা পাস করার প্রয়োজন হয়, তাহলে props এর সাহায্যে তা সময় সাপেক্ষ্য এবং ভুল হওয়ার সম্ভাবনাও বেশি থাকে। সেজন্য এই ধরনের পরিস্থীতির জন্য Context API ব্যবহার করা হয়। এতে সহজেই GrandParent থেকে Parent, Parent থেকে Child এ ডাটা পাঠানো যায়। </p>
            </section>
            <section>
                <h1 className='text-2xl text-center'>What is semantic tag?</h1>
                <p className='text-justify mt-4'>Semantic tag হল HTML এর বিশেষ কিছু ট্যাগ। এই ট্যাগ গুলো ডেভলপার এবং ওয়েব ব্রাউজার উভয়ের ট্যাগ চিনতে সাহায্য করে। Semantic tag দ্বারা ডকুমেন্টের ইনফরমেশন সহজেই বুজতে পারা যায়। যেমন: Semantic tag -form use করলে আমরা সহজেই বুজে যেতে পারি এই ট্যাগে কি হচ্ছে। Semantic tag সবচেয়ে বেশি কাজে আসে (search engine optimization SEO ) এর কাজ করার সময়। এটি website এর accessibility-তে ভূমিকা রাখে।  </p>
            </section>
            <section>
                <h1 className='text-2xl text-center mt-5'> What is the difference between inline, inline-block and block elements? </h1>
                <p className='text-justify mt-4 pl-5'>Inline: <li>Inline Element শুধু মাত্র তার কন্টেন্ট যতটুকু জায়গায় জুড়ে থাকে ততটুকুই জায়গা ব্লক করে রাখে। </li>
                    <li>Inline element এ height, width সেট করা যায় না।</li>
                    Block:-
                    <li>Block element ব্রাউজারের পুরো width নিয়ে নেয়। </li>
                    <li>Block element এর height, width সেট করা যায়।</li>
                    Inline-block:-
                    <li>Inline block element এর height, width সেট করা যায়।</li>
                    <li>এটি শুধু তার জায়গার মধ্যে ব্লক হয়ে থাকে।</li>
                </p>
            </section>
        </article>
    );
};

export default Blogs;