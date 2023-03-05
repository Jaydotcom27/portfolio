import {React, useEffect} from 'react'
import './CTA.scss'

function CTA() {
  useEffect(() => {
    console.log('happened')
    const phrase = '1,263 kilobytes of data';
    const targetEl = document.getElementById('data_cta');

    phrase.split("").forEach((char, idx) => {
      const el = document.createElement('span');
      el.innerText = char;
      el.setAttribute('data-index', idx.toString());
      el.classList.add("hover-char")
      targetEl.appendChild(el)
    });

    const hoverChars = [...document.getElementsByClassName('hover-char')]

    const removeClasses = () => {
      hoverChars.forEach((char) => {
        char.classList.remove('data_hovered');
        char.classList.remove('data_hovered-adjacent');
      })
    };

    hoverChars.forEach((char) => {
      char.addEventListener('mouseover', (e) => {
        removeClasses();
        const currentElement = e.target;
        const index = parseInt(currentElement.getAttribute('data-index'), 10);
        const prevIndex = index === 0 ? null : index - 1
        const nextIndex = index === phrase.length - 1 ? null : index + 1

        const prevEl = prevIndex !== null && document.querySelector(`[data-index="${prevIndex}"]`);
        const nextEl = nextIndex !== null && document.querySelector(`[data-index="${nextIndex}"]`);

        e.target.classList.add('data_hovered')
        prevEl && prevEl.classList.add('data_hovered-adjacent')
        nextEl && nextEl.classList.add('data_hovered-adjacent')
      });
    });

    document.getElementById('data_cta').addEventListener('mouseleave', () => {
      removeClasses()
    })
  },[])

  return (
    <div id='CTA'>
        <span className='span'>This website contains</span>
        <span id='data_cta' className='data'></span>
        <span className='span span-limiter'>in the form of dynamically fetched text which only goal is to tell <span className='highlight'>you</span> about <span className='highlight'>me</span>.</span>
    </div>
  )
}

export default CTA