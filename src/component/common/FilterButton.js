import React from "react";
import PropTypes from "prop-types";
import {StyledFilterButton} from "../../style/StyledFilterButton.js";

async function getData(url) {
    const response = await fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer" // no-referrer, *client
    });

    return await response.json();
}

function fetchByGenre(genre, setMovies) {

    let url = new URL("http://localhost:4000/movies");
    if (genre == 'ALL') {
        getData(url).then((json) =>
            setMovies(json.data));
    } else {
        const params = { searchBy: 'genres', search: genre.toLowerCase() };
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

        getData(url).then((json) =>
            setMovies(json.data));
    }
}


export function FilterButton({ label, setMovies }) {
    return (
        <StyledFilterButton onClick={() => fetchByGenre(label, setMovies)}>{label}</StyledFilterButton>
    );
}

FilterButton.propTypes = {
    label: PropTypes.string.isRequired,
    setMovies: PropTypes.func.isRequired,
}