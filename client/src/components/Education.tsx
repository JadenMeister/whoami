
import React from 'react';
import type { ReactElement } from 'react';

type educationProps = {

    school: string;
    major: string;
    degree: string;
    startDate: string;
    endDate: string;
}



export default function Education(): ReactElement {
    return (
        <div className="justify-center items-center flex flex-col h-25% px-5 border-2 border-blue-500 m-3">
            <h1>교육사항 </h1>
            <p>Edu</p>
        </div>
    );
}
