export function navigateToAddRun(navigate, date) {
    navigate('/add_run', {state: {
        date: date
    }});
}

export function navigateToUpdateRun (navigate, date, day) {
    const { run_type, distance, minutes, comment, run_id} = day;
    navigate('/update_run', {state: {
        date: date,
        run_type: run_type,
        distance: distance,
        time: minutes,
        comment: comment,
        run_id: run_id,
        }
    });
}

export function navigateToUpdateProfile (navigate, profile) {
    navigate('/update_profile', { state: profile })
}

export function navigateToSearchResults (navigate, profiles) {
    navigate('/search_results', { state: profiles })
}

export function navigateToPublicProfile (navigate, profile_id, profile_ids) {
    navigate('/public_profile', { 
        state: { 
            current_profile_id: profile_id,
            profile_ids: profile_ids  
        }
    })
}

export function navigateToCalendarPublic (navigate, user_id) {
    navigate('/calendar_public', { state: user_id })
}