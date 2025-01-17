import React from 'react';
import Container from "@/components/elements/Container";
import WeekSpend from './DashboardOverview/WeekSpend';

const DashboardOverview = () => {
    return (
        <section className='mt-16'>
            <Container>
                <WeekSpend />
            </Container>
        </section>
    )
}

export default DashboardOverview