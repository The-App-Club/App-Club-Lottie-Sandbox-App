import {css} from '@emotion/css';
import animationData from '../lotties/77-im-thirsty.json';
import {useEffect, useMemo, useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useLottie, useLottieInteractivity} from 'lottie-react';

const BebopLottie = () => {
  const itemDomRef = useRef(null);

  // https://lottiereact.com/hooks/useLottie#params
  const {goToAndStop, animationContainerRef, View, animationItem} = useLottie(
    {
      animationData,
      loop: false,
      autoplay: false,
      className: css`
        width: 400px;
        height: 400px;
        @media (max-width: 768px) {
          width: 300px;
          height: 300px;
        }
      `,
    },
    {}
  );

  useEffect(() => {
    if (!animationItem) {
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const itemDom = itemDomRef.current;
    // https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.matchMedia()
    ScrollTrigger.matchMedia({
      '(min-width: 769px)': function () {
        gsap.timeline({
          scrollTrigger: {
            trigger: itemDom,
            start: 'top 10%',
            end: 'bottom+=300% top',
            pin: true,
            markers: true,
            scrub: true,
            onUpdate: function (e) {
              const p = e.progress;
              const maxFrames = animationItem.totalFrames;
              const frame = maxFrames * p;
              // console.log(p, frame, maxFrames);
              animationItem.goToAndStop(frame, true);
            },
          },
        });
      },

      '(max-width: 768px)': function () {
        gsap.timeline({
          scrollTrigger: {
            trigger: itemDom,
            start: 'top 20%',
            end: 'bottom+=900% top',
            pin: true,
            markers: true,
            scrub: true,
            onUpdate: function (e) {
              const p = e.progress;
              const maxFrames = animationItem.totalFrames;
              const frame = maxFrames * p;
              // console.log(p, frame, maxFrames);
              animationItem.goToAndStop(frame, true);
            },
          },
        });
      },
    });

    return () => {};
  }, [animationItem]);

  return (
    <div
      className={css`
        width: 100%;
        min-height: 300vh;
      `}
    >
      <div
        ref={itemDomRef}
        className={css`
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          /* border: 1px solid; */
        `}
      >
        {View}
      </div>
    </div>
  );
};

export {BebopLottie};
