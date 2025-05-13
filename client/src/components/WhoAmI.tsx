
import React from 'react';
import type { ReactElement } from 'react';
import type { Profile } from '../type/profile.d.ts';
import { useState } from 'react';




export default function WhoAmI(): ReactElement {
    const profile: Profile ={
        name:"김백수",
        age: 30,
        job: "무직",
        gender:"외계인"
    }

    return (
        <div className="justify-center items-center flex flex-col h-25% px-5 border-2 border-black">
            <h1>Who Am I?</h1>
            <p> {profile.name}</p>
            <p> {profile.age}</p>
            <p> {profile.job}</p>
            <p>{profile.gender}</p>
        </div>
    );
}
