export const parseUTCDate = (dateString) => {
    return new Date(dateString+"T00:00");
}