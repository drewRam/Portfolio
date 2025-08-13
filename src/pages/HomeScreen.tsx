import React from 'react';

const HomeScreen = () => {
    return (
        <>
            <section>
                <p>
                    Hey! I am Andrew.<br/>
                    I build interactive websites that<br/>
                    run across platforms & devices.
                </p>
            </section>
            {/* <svg width="100" height="100">
                    <defs>
                        <polygon id="q1t" points="50,10 10,90 90,90" fill="none" stroke="red" />
                    </defs>

                    <use xlinkHref="#q1t" />
            </svg> */}
            <section>
                <p>
                    "Do What You Love<br/>
                    Love What You Do<br/>"
                </p>
            </section>
            <section>
                <p>
                    {"<projects>"}
                    Include projects here
                    {"</projects>"}
                </p>
            </section>
            <section>
                <p>
                    "Ever Positive Never Negative"
                </p>
            </section>
            <section>
                <p>
                    {"<about>"}
                    I am a full-stack developer with over a decade of experience. I work with agencies across the globe to create high performance and rich interactive websites that work across platforms & devices.
                    Although I'm very familiar with using frameworks like React, Angular, and Vue, I can construct websites with hand-coded HTML5, CSS3 and JavaScript.
                    With a stong emphasis on "Progressive Enhancement", I look for creative ways to push the boundaries of a websites front-end code without compromsing on browser support and performance.
                    In a quest for always keeping up with the latest technologies, I read books, attend conferences and meetups.
                    {/* Attach a link to resume */}
                    {"</about>"}
                </p>
            </section>
            <section>
                <p>
                    {"<contact>"}
                    Feel free to send an e-mail to insert-email-address-here
                    {"</contact>"}
                </p>
            </section>
        </>
    );
}

export default HomeScreen;
