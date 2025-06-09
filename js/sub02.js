window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)







        
        










    });



    /*  slide,click event section */

    gsap.to('#section04 .fix-this-02', {
        scrollTrigger: {
            trigger: "#section04 .trigger-this-02",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            pin: true,
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });



    gsap.to('#section04 .chapagetti_container .chapagetti_itemdetail', {
        // y:-4660,
        y:-4484,
        scrollTrigger: {
            trigger: "#section04",
            start: "top top",
            // end: () => "+=" + 300,
            end: 'bottom bottom',
            // pinSpace:false,
            pinSpacing: false,
            scrub: true,
        }
    });



    //이미지 확대
    let target = $('.target');
    let zoom = target.data('zoom');
    console.log(zoom);



    $('.zoom_img01').on('mousemove',magnify)
        .prepend("<div class='magnifier'></div>").children('.magnifier').css({
        "background": `url('imags_sub02/section02/main_chapagrtti01.png') no-repeat`,
        "backgroundSize": target.width() * zoom + "px " + target.height() * zoom+ "px"
    });


    let magnifier = $('.magnifier');

    function magnify(e) {

        var mouseX = e.pageX - $(this).offset().left;
        var mouseY = e.pageY - $(this).offset().top;

        if (mouseX < $(this).width() && mouseY < $(this).height() && mouseX > 0 && mouseY > 0) {
            magnifier.fadeIn(100);
        } else {
            magnifier.fadeOut(100);
        }

        if (magnifier.is(":visible")) {

            var rx = -(mouseX * zoom - magnifier.width() /2 );
            var ry = -(mouseY * zoom - magnifier.height() /2 );

            var px = mouseX - magnifier.width() / 2;
            var py = mouseY - magnifier.height() / 2;

            magnifier.css({
                left: px,
                top: py,
                backgroundPosition: rx + "px " + ry + "px"
            });
        }
    }


})


