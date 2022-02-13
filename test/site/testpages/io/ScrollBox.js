import { useEffect, useRef } from 'react';
import { useScrollSense } from '../../../../src/io';

function ScrollBox({ height }) {

       let scrollBoxRef = useRef();
       let ioActions = useScrollSense(true);

       useEffect(() => {

              ioActions.onIntersection(scrollBoxRef.current, (ioEntry, el, time) => {

                     if (ioEntry.isIntersecting) {
                            el.style.backgroundColor = '#00ff00';
                     }
                     else {
                            el.style.backgroundColor = '#7a7a7a';
                     }

              });
       });


       return (
              <div ref={scrollBoxRef} className="scroll-box">
                     Scroller
              </div>
       )
};

export default ScrollBox;