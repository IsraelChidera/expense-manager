import React from 'react';
import Container from "@/components/elements/Container";
import WeekSpend from './DashboardOverview/WeekSpend';

const DashboardOverview = () => {
    return (
        <section className='mt-16'>
            <>
                <WeekSpend />
            </>
        </section>
    )
}

export default DashboardOverview