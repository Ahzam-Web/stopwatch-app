let interval_handler;

function handleStartWatch(){
    if(interval_handler != undefined || interval_handler != null){
        return;
    }

    interval_handler = setInterval(function(){
        let m_sec_span = document.querySelector('.m_sec');
        let second_span = document.querySelector('.seconds');
        let minute_span = document.querySelector('.minutes');
        let hour_span = document.querySelector('.hours');

        let m_sec = Number(m_sec_span.textContent);
        let seconds = Number(second_span.textContent);
        let minutes = Number(minute_span.textContent);
        let hours = Number(hour_span.textContent);

        let new_m_sec = m_sec + 1;
        if(new_m_sec >= 100){
            new_m_sec = 0;
        
            let new_seconds = seconds + 1;
            if(new_seconds >= 60){
                new_seconds = 0;
                let new_minutes = minutes + 1;
                if(new_minutes >= 60){
                    new_minutes = 0;

                    hour_span.textContent = (hours + 1).toString().padStart(2, '0');
                }

                minute_span.textContent = (new_minutes).toString().padStart(2, '0');
            }

            second_span.textContent = (new_seconds).toString().padStart(2, '0');
        }

        m_sec_span.textContent = (new_m_sec).toString().padStart(2, '0');
    }, 10);
}

function handleStopWatch(){
    handlePauseWatch();
    document.querySelector('.m_sec').textContent = '00';
    document.querySelector('.seconds').textContent = '00';
    document.querySelector('.minutes').textContent = '00';
    document.querySelector('.hours').textContent = '00';
}   

function handlePauseWatch(){
    clearInterval(interval_handler);
    interval_handler = null;
}
