window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)







        
        










    });



    /*  slide,click event section */


    gsap.to('#section02 .fix-this-04', {
        scrollTrigger: {
            trigger: "#section02 .trigger-this-04",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });



    gsap.to('#section02 .scheduled_container .scheduled_detail', {
        y:-1300,
        scrollTrigger: {
            trigger: "#section02",
            start: "top top",
            // end: () => "+=" + 1000,
            end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });



})


