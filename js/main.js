document.addEventListener('DOMContentLoaded', ()=>{
    anime.timeline({
        
    })
    .add({
        targets: '#cover',
        left: ['-110%', '110%'],
        easing: 'easeInOutQuad',
        complete: (anim)=> document.getElementById('cover').style.display = 'none'
    })
    .add({
        targets: 'nav',
        translateY: [10, 0],
        opacity: [0, 1],
        easing: 'linear'
    })
    .add({
        targets: '.background',
        scale: [0, 1]
    }, '-=600')
    .add({
        targets: '.name',
        translateX: [-100, 0],
        opacity: [0, 1],
        easing: 'easeOutQuad'
    }, '-=600')
    .add({
        targets: '.player',
        translateX: [100, 0],
        opacity: [0, 1],
        easing: 'easeOutQuad'
    }, '-=600')
    .add({
        targets: '.details',
        scaleY: [0, 1],
        easing: 'easeOutQuad'
    }, '-=600');
    
    let detail = document.getElementById('detail');
    detail.addEventListener('mouseenter', ()=>{
        anime({
            targets: '.background',
            scale: 1.3,
            rotate: '45deg'
        })
    });
    detail.addEventListener('mouseleave', ()=>{
        anime({
            targets: '.background',
            scale: 1,
            rotate: '0deg'
        })
    });
    detail.addEventListener('click', ()=>{
        anime.timeline({
            
        })
        .add({
            targets: '.background',
            scale: 1,
            rotate: '0deg'
        })
        .add({
            targets: '.details',
            scaleY: [1, 0],
            easing: 'easeInOutCubic'
        }, '-=600')
        .add({
            targets: '.background',
            scaleY: [1, 0],
            easing: 'easeInOutCubic'
        }, '-=600')
        .add({
            targets: '.name',
            translateY: '-100',
            opacity: [1, 0],
            easing: 'easeInOutCubic'
        }, '-=600')
        .add({
            targets: '.player',
            translateY: '-200',
            opacity: [1, 0],
            easing: 'easeInOutCubic'
        }, '-=600')
        .add({
            targets: '.blue_bg',
            top: [0, '-100%'],
            easing: 'easeInOutCubic'
        }, '-=600')
        .add({
            targets: '.main_content',
            top: [0, '-100%'],
            easing: 'easeInOutCubic'
        }, '-=600')
        .add({
            targets: '.event_details',
            translateY: [40, 0],
            opacity: [0, 0.1],
            easing: 'easeInCubic'
        }, '-=300')
        .add({
            targets: '.card_content',
            translateY: [1000, 0],
            easing: 'easeInOutCubic'
        }, '-=600')
        
        
    })
})




















