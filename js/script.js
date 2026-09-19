/* =====================================================
   ELEMENTS
===================================================== */

const openingScreen =
    document.getElementById("openingScreen");

const openInvitation =
    document.getElementById("openInvitation");

const mainInvitation =
    document.getElementById("mainInvitation");

const weddingMusic =
    document.getElementById("weddingMusic");


/* =====================================================
   OPEN INVITATION
===================================================== */

if (openInvitation) {

    openInvitation.addEventListener(
        "click",
        function () {

            /* SHOW MAIN INVITATION */

            if (mainInvitation) {

                mainInvitation.classList.add("visible");

            }


            /* CLOSE OPENING SCREEN */

            if (openingScreen) {

                openingScreen.classList.add("opened");

            }


            /* PLAY WEDDING SONG */

            if (weddingMusic) {

                weddingMusic.volume = 0.35;

                weddingMusic.play()

                    .then(function () {

                        console.log(
                            "Wedding music started."
                        );

                    })

                    .catch(function (error) {

                        console.log(
                            "Music could not start:",
                            error
                        );

                    });

            }


            /* TEMPORARILY LOCK SCROLL */

            document.body.style.overflow =
                "hidden";


            setTimeout(function () {

                document.body.style.overflow =
                    "";

            }, 1200);


            /* SCROLL TO QUOTE */

            setTimeout(function () {

                const quoteSection =
                    document.querySelector(
                        ".quote-section"
                    );

                if (quoteSection) {

                    quoteSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }, 900);

        }
    );

}


/* =====================================================
   INVITATION CONTENT ANIMATION
===================================================== */

const invitationContent =
    document.querySelector(
        ".invitation-content"
    );


if (invitationContent) {

    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "show"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.15
            }

        );


    observer.observe(
        invitationContent
    );

}