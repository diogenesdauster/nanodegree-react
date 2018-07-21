export const RECEIVE_ENTRIES = "RECEVIE_ENTRIES";
export const ADD_ENTRY = "ADD_ENTRY";

export function receiveEntries(entries) {
  return {
    type: RECEIVE_ENTRIES,
    entries
  };
}

export function addEntry(entry) {
  return {
    type: ADD_ENTRY,
    entry
  };
}
