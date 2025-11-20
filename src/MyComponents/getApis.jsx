const getQuote = async () => {
    const res = await fetch("http://api.quotable.io/random");
    const data = await res.json();
    return data;
}
const getQuoteA = async () => {
    const res = await fetch("https://random-data-api.com/api/v2/users?size=2&is_xml=true");
    const data = await res.json();
    return data;
}
const fetcher = async (...args) => {
    const res = await fetch(...args);
    const data = await res.json();
    return data;
}
export {getQuote, getQuoteA, fetcher};