function formatDateTime(datetime: string) {
    return new Date(datetime).toLocaleString("nl-NL", { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' });
}

function formatDate(date: string) {
    return new Date(date).toLocaleString("nl-NL", { year: 'numeric', month: 'numeric', day: 'numeric' });
}

export { formatDateTime, formatDate }