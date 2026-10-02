const Weather = () => {
    let temperature = 7;

    if (temperature < 15) {

        return <h1>it is cold outside</h1>;

    } else if (temperature >= 15 && temperature <= 25) {

        return <h1>It's nice outside</h1>;

    } else if (temperature >= 25) {
        return <h1>It is hot outside</h1>
    }
};
export default Weather;