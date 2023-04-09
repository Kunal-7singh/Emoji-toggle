const openFace=document.querySelector('.open');
const closeFace=document.querySelector('.close');


openFace.addEventListener('click', ()=>{
if(closeFace.classList.contains('close'))
{
    closeFace.classList.add('active');
    openFace.classList.remove('active');
}
})
closeFace.addEventListener('click', ()=>{
    if(openFace.classList.contains('open'))
    {
        openFace.classList.add('active');
        closeFace.classList.remove('active');
    }
})

