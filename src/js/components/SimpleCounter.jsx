const SimpleCounter = ({thousandsDigit, hundredsDigit, tensDigit, onesDigit}) => {

    return (
        <>
            <div className="counter-display d-flex justify-content-center m-5 p-5 bg-dark text-white">
                {/*Div for counter image*/}
                <div className="counter-image px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                    </svg>
                </div>
                {/*Div for the seconds */}
                <div className="seconds thousands p-3 m-3 bg-white text-dark">{thousandsDigit}</div>
                <div className="seconds hundreds p-3 m-3 bg-white text-dark">{hundredsDigit}</div>
                <div className="seconds tens p-3 m-3 bg-white text-dark">{tensDigit}</div>
                <div className="seconds ones p-3 m-3 bg-white text-dark">{onesDigit}</div>
            </div>
        </>
    );
};

export default SimpleCounter;