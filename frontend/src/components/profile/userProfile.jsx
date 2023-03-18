import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProfile, getStats } from "../../misc/apiCalls";
import { getMonthNumFromDate, getYear } from "../../misc/calendarFunctions";
import ProfileHeader from "./profileHeader";
import ProfileBody from "./profileBody";
import ProfileFooter from "./profileFooter";
import Card from "../miscComponents/card/card";
import './profile.css';

export default function UserProfile () {

    const curDate = new Date()
    const navigate = useNavigate();
    const [profile, setProfile ] = useState({
        id: '',
        username: '',
        age: '',
        gender: '',
        email: '',
        preference: '',
        history: '',
        description: ''
    })

    const [filters, setFilters] = useState({
        month: getMonthNumFromDate(curDate),
        year: getYear(curDate)
    })

    const [stats, setStats] = useState({
        month: 0,
        year: 0,
        week: 0
    })

    useEffect(() => {
        getUserProfile()
        .then((data) => {
            if (data) {
                setProfile(data)
            } else {
                navigate('/create_profile');
            }   
        })

        .then(getStats(filters)
            .then((data) => {
                setStats(data)
            })
        )
    }, [])

    return (
        <div className='profile'>
            <Card
                header={ <ProfileHeader profile={ profile } /> }
                body={ <ProfileBody profile={ profile } /> }
                footer={ <ProfileFooter profile={ profile } /> }
                hover={ false } 
            />
        </div>
    )
}