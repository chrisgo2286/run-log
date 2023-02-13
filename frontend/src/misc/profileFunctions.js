
export function compileIDs (profiles) {
    //Extracts profile ids from list of profiles and returns list of ids
    let profile_ids = []
    for(let i=0; i < profiles.length; i++) {
        profile_ids.push(profiles[i].id)
    }
    return profile_ids;
}

export function findPreviousProfile (current_id, profile_ids) {
    //Takes current profile id and list of all profile ids and returns
    //previous profile id
    const current_ndx = findNdx(current_id, profile_ids);
    const previous_ndx = (current_ndx === 0) ? null : current_ndx - 1;
    console.log(previous_ndx)
    return (previous_ndx >= 0) ? profile_ids[previous_ndx]: null;
}

export function findNextProfile (current_id, profile_ids) {
    //Takes current profile id and list of all profile ids and returns
    //next profile id
    const current_ndx = findNdx(current_id, profile_ids);
    const next_ndx = (current_ndx === profile_ids.length - 1) ? null : current_ndx + 1;
    return (next_ndx) ? profile_ids[next_ndx]: null;
}

function findNdx (elem, array) {
    for (let i=0; i < array.length; i++) {
        if (array[i] === elem) {
            return i;
        }
    }
}