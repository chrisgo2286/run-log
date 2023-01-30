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