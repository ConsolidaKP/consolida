import { IconPlus } from '@tabler/icons-react';
import React, { useState } from 'react';


type SpeedDialProps = {
    actions: JSX.Element[]
}

export default function SpeedDial({ actions }: SpeedDialProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSpeedDial = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {(
                <div className="space-y-2 flex flex-col items-center">
                    {
                        actions.map((action, index) => (
                            <span className={(isOpen ? ' top-0 translate-y-0 z-50 ' : 'absolute bottom-0 translate-y-12 opacity-0') + ' transition-transform static'} key={index}>
                                {action}
                            </span>
                        ))
                    }
                </div>
            )}

            <button
                onClick={toggleSpeedDial}
                className="p-3 rounded-full focus:outline-none shadow-lg bg-slate-200"
            >
                <IconPlus className={(isOpen ? ' rotate-45 ' : ' rotate-0 ') + ' transition-all '} />
            </button>
        </>
    );
};