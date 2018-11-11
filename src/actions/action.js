export const initState = () => ({ type: "INIT_STATE" })

export const updateNote = payload => ({ type: "UPDATE_NOTE", ...payload })

export const updateMeter = payload => ({ type: "UPDATE_METER", ...payload })

export const updateBpm = payload => ({ type: "UPDATE_BPM", ...payload })
