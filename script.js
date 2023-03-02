const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-text')

setTimeout(getData, 2500)

function getData () {
    header.innerHTML='<img src="https://th.bing.com/th/id/OIP.lqmiyGGKSFbAgcvaOPXrWgHaLH?pid=ImgDet&rs=1" alt=""/>'
    title.innerHTML ='THE WEEKEND'
    excerpt.innerHTML ='Abel Makkonen Tesfaye  known professionally as the Weeknd, is a Canadian singer, songwriter and actor'
    profile_img.innerHTML='<img src="https://i.pinimg.com/originals/4d/71/1a/4d711a277cc243b9b02adb0765c10833.jpg" alt="">'
    name.innerHTML= 'ABELTESFAYE'
    date.innerHTML ='Feb 16 1990'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))


}
