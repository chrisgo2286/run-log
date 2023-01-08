export function navigateToAddRun(navigate, date) {
    navigate('/add_run', {state: {
        date: date
    }});
}

export function navigateToUpdateRun (navigate, date, day) {
    const { distance, minutes, comment, run_id} = day;
    navigate('/update_run', {state: {
        date: date,
        distance: distance,
        time: minutes,
        comment: comment,
        run_id: run_id,
        }
    });
}