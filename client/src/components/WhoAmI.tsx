
import React from 'react';
import type { ReactElement } from 'react';
import type { Profile } from '../type/profile.d.ts';
import { useState } from 'react';




export default function WhoAmI(): ReactElement {
    const profile: Profile ={
        name:"김백수",
        age: 30,
        job: "무직",
        gender:"외계인",
        charicteristics:["커피 없으면 머리 안 돌아감", "파인애플 피자 좋아함", "닥터페퍼 좋아함"]
    }

    const labels: Record<keyof Profile,string> = {
        name: "이름",
        age: "나이",
        job: "직업",
        gender:"성별",
        charicteristics: "특징"
    }

    return (
        <>
        <div className="w-full font-bold text-red-500 size-xl flex justify-center mt-5 "> SELECT * FROM users WHERE name = '김백수' OR '1'='1';</div>

            <div className=" grid grid-cols-4 gap-4 justify-center items-center mt-5 w-full flex h-25 px-5">
                {Object.entries(profile).flatMap(([key, value]) => {
                    const label = labels[key as keyof Profile];

                    if (Array.isArray(value)) {
                        return value.map((item, idx) => (
                            <div
                                key={`${key}-${idx}`}
                                className="flex flex-col items-center shadow-md rounded-lg p-4 m-3"
                            >
                                <div className="text-lg font-bold">{`${label} ${idx + 1}`}</div>
                                <div className="text-lg">{item}</div>
                            </div>
                        ));
                    }
                    return (
                        <div key={key} className="flex flex-col items-center shadow-md rounded-lg  p-4 m-3">
                            <div className="text-lg font-bold">{labels[key as keyof Profile]}</div>
                            <div className="text-lg">{value}</div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
