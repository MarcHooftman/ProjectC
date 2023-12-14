function formatDateTime(datetime: string) {
    return new Date(datetime).toLocaleString("nl-NL", { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' });
}

function formatDate(date: string) {
    return new Date(date).toLocaleString("nl-NL", { year: 'numeric', month: 'numeric', day: 'numeric' });
}

function formatDateTimeLong(date: string) {
    return new Date(date).toLocaleString("nl-NL", { weekday: "short", year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })
}

export { formatDateTime, formatDate, formatDateTimeLong }